import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PrismaService } from '../../prisma/prisma.service';
import { Error, Model } from 'mongoose';
import { Novel, NovelDocument } from '../../mongo/schema/novel.schema';
import { Comment, CommentDocument } from '../../mongo/schema/comment.schema';

import { GetCommentsByNovelIdService } from '../../comments/service/get-comments-by-novelid.service';
import { DeleteCommentsService } from '../../comments/service/delete-comments.service';

@Injectable()
export class DeleteNovelsService {
  constructor(
    @InjectModel(Novel.name) private novelModel: Model<NovelDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private prisma: PrismaService,
    private getCommentsByNovelIdService: GetCommentsByNovelIdService,
    private deleteCommentsService: DeleteCommentsService,
  ) {}

  //小説の削除
  async deleteNovel(id: string, userId: string) : Promise<{ message: string }> {
    const psqlNovelDelete = await this.prisma.novel.findUnique({
      where: { id },
    });
    if (!psqlNovelDelete) throw new Error('該当小説がありません');
    if (psqlNovelDelete.authorId !== userId)
      throw new Error('権限がありません');

    const deleteComments = await this.getCommentsByNovelIdService.getCommentsByNovelId(id);
    const commentsId = deleteComments.psqlComments.map((comment) => comment.id);

    await Promise.all(
      commentsId.map(async (commentId) => {
        await this.deleteCommentsService.deleteComment(commentId, userId);
      }),
    );

    await this.prisma.novel.delete({ where: { id } });
    const sharedId = psqlNovelDelete.sharedId;
    await this.novelModel.deleteOne({ sharedId });

    return { message: 'successfully deleted novel' };
  }
}
