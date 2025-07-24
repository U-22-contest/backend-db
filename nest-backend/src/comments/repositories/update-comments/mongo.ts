import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from '../../../mongo/schema/comment.schema';

@Injectable()
export class MongoUpdateCommentRepository {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>,
  ) {}

  async updateCommentBySharedId(sharedId: string, comment: string) {
    return this.commentModel.findOneAndUpdate(
      { sharedId },
      { $set: { comment: comment } },
      { new: true }
    );
  }
}
