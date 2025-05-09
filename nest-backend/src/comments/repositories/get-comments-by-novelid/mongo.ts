import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from '../../../mongo/schema/comment.schema';

@Injectable()
export class MongoGetCommentsByNovelIdRepository {
    constructor(
        @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>
    ) {}

    async getCommentsByNovelId(sharedIds: string[]) : Promise<CommentDocument[]>  {
        // return this.commentModel.find({ sharedId: { $in: sharedIds } }).cursor().toArray();
        return this.commentModel.find({ sharedId: { $in: sharedIds } }).exec();
    }
}