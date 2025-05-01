import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from '../../../mongo/schema/comment.schema';

@Injectable()
export class MongoDeleteCommentRepository {
    constructor(
        @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>
    ) {}

    async deleteCommentBySharedId(sharedId: string) : Promise<void>  {
        await this.commentModel.deleteOne({ sharedId });
    }
}