import { Injectable } from '@nestjs/common';
import { Error } from 'mongoose';
import { PostgresDeleteCommentRepository } from '../repositories/delete-comments/postgres';
import { MongoDeleteCommentRepository } from '../repositories/delete-comments/mongo';

@Injectable()
export class DeleteCommentsService {
  constructor(
    private readonly postgresDeleteComment: PostgresDeleteCommentRepository,
    private readonly mongoDeleteComment: MongoDeleteCommentRepository,
  ) {}

  //コメント削除
  async deleteComment(id: string, userId: string) : Promise<{message: string}> {
    const comment = await this.postgresDeleteComment.findComentById(id);

    //コメントの有無の判断と、投稿者のみ削除
    if (!comment) throw new Error('コメントが見つかりません');
    if (comment.userId !== userId) throw new Error('権限がありません');

    //postgresql mongo 各削除
    await this.postgresDeleteComment.deleteCommentById(id);
    await this.mongoDeleteComment.deleteCommentBySharedId(comment.sharedId);

    return { message: 'コメント削除' };
  }
}
