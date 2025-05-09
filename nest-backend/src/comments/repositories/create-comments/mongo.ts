import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from '../../../mongo/schema/comment.schema';

@Injectable()
export class MongoCreateCommentRepository {
    constructor(
        @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>
    ) {}

    async createComment(sharedId: string, comment: string) : Promise<CommentDocument>  {
        const novel = new this.commentModel({
            sharedId,
            comment
        });
        return novel.save();
    }
}