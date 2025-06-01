import { Injectable } from '@nestjs/common';
import { Error } from 'mongoose';
import { PostgresDeleteNovelRepository } from '../repositories/delete-novels/postgres';
import { MongoDeleteNovelRepository } from '../repositories/delete-novels/mongo';

import { GetCommentsByNovelIdService } from '../../comments/service/get-comments-by-novelid.service';
import { DeleteCommentsService } from '../../comments/service/delete-comments.service';

@Injectable()
export class DeleteNovelsService {
  constructor(
    private readonly postgresDeleteNovel: PostgresDeleteNovelRepository,
    private readonly mongoDeleteNovel: MongoDeleteNovelRepository,

    private readonly getCommentsByNovelIdService: GetCommentsByNovelIdService,
    private readonly deleteCommentsService: DeleteCommentsService,
  ) {}

  //小説の削除
  async deleteNovel(id: string, userId: string): Promise<{ message: string }> {
    const psqlNovelDelete = await this.postgresDeleteNovel.findNovelById(id);
    if (!psqlNovelDelete) throw new Error('該当小説がありません');
    if (psqlNovelDelete.authorId !== userId)
      throw new Error('権限がありません');

    const deleteComments =
      await this.getCommentsByNovelIdService.getCommentsByNovelId(id);
    const commentsId = deleteComments.map((comment) => comment.id);

    await Promise.all(
      commentsId.map(async (commentId) => {
        await this.deleteCommentsService.deleteComment(commentId, userId);
      }),
    );

    await this.postgresDeleteNovel.deleteNovelById(id);
    await this.mongoDeleteNovel.deleteNovelBySharedId(psqlNovelDelete.sharedId);

    return { message: 'successfully deleted novel' };
  }
}
