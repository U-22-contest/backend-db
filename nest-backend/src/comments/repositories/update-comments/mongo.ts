                                           import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from '../../../mongo/schema/comment.schema';
import { UpdateCommentDto } from '../../dto/update-comment.dto';

@Injectable()
export class MongoUpdateCommentRepository {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>,
  ) {}

  async updateCommentBySharedId(sharedId: string, dto: UpdateCommentDto): Promise<void> {
    await this.commentModel.updateOne(
      { sharedId },
      { $set: { comment: dto.content } },
    );
  }
}
