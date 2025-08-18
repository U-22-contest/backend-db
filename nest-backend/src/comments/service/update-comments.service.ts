import { Injectable } from '@nestjs/common';
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
    try {
      // 存在確認・本人確認
      const updateComment = await this.postgresUpdateComment.findCommentAndUpdate(id, userId);

      const updateMongoComment = await this.mongoUpdateComment.updateCommentBySharedId(updateComment.sharedId, dto.comment);

      return {
        ...updateComment,
        comment: updateMongoComment?.comment,
      };

    } catch (error) {
      throw error;
    }
  }
}
