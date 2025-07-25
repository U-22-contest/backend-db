import { Injectable } from '@nestjs/common';
import { Error } from 'mongoose';
import { PostgresUpdateCommentRepository } from '../repositories/update-comments/postgres';
import { MongoUpdateCommentRepository } from '../repositories/update-comments/mongo';
import { UpdateCommentDto, UpdateCommentResponse } from '../dto/update-comment.dto';

@Injectable()
export class UpdateCommentService {
  constructor(
    private readonly postgresUpdateComment: PostgresUpdateCommentRepository,
    private readonly mongoUpdateComment: MongoUpdateCommentRepository,
  ) {}

  // コメント編集処理
  async updateComment(id: string, userId: string, dto: UpdateCommentDto): Promise<UpdateCommentResponse> {
    const comment = await this.postgresUpdateComment.findCommentById(id);

    // 存在確認・本人確認
    if (!comment) throw new Error('コメントが見つかりません');
    if (comment.userId !== userId) throw new Error('権限がありません');

    const updateMongoComment = await this.mongoUpdateComment.updateCommentBySharedId(comment.sharedId, dto.comment);

    return {
      ...comment,
      comment: updateMongoComment?.comment,
    };
  }
}
