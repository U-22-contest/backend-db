import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Comment as PrismaComment } from "../../../generated/postgresql";
import { Comment, CommentDocument } from '../../mongo/schema/comment.schema';

export type CreateCommentResponse = {
  postgresComment: PrismaComment;
  mongoComment: CommentDocument;
};

@Injectable()
export class CreateCommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private prisma: PrismaService,
  ) {}

  // コメント投稿
  async createComment(createCommentDto: CreateCommentDto) : Promise<CreateCommentResponse> {
    // PostgresqlとMongoの共通ID
    const sharedId = uuidv4();

    // PostgreSQL
    const postgresComment = await this.prisma.comment.create({
      data: {
        sharedId: sharedId,
        userId: createCommentDto.userId,
        novelId: createCommentDto.novelId,
        startIndex: createCommentDto.startIndex,
        endIndex: createCommentDto.endIndex,
      },
    });

    // MongoDB
    const mongoComment = new this.commentModel({
      sharedId: sharedId,
      comment: createCommentDto.comment,
    });
    await mongoComment.save();

    return { postgresComment, mongoComment };
  }

}
