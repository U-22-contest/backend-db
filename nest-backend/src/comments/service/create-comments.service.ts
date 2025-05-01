import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { v4 as uuidv4 } from 'uuid';
import { Comment as PrismaComment } from "../../../generated/postgresql";
import { CommentDocument } from '../../mongo/schema/comment.schema';
import { PostgresCreateCommentRepository } from '../repositories/create-comments/postgres';
import { MongoCreateCommentRepository } from '../repositories/create-comments/mongo';

export type CreateCommentResponse = {
  postgresComment: PrismaComment;
  mongoComment: CommentDocument;
};

@Injectable()
export class CreateCommentsService {
  constructor(
    private readonly postgresCreateComment : PostgresCreateCommentRepository,
    private readonly mongoCreateComment : MongoCreateCommentRepository,

  ) {}
  // コメント投稿
  async createComment(createCommentDto: CreateCommentDto) : Promise<CreateCommentResponse> {
    // PostgresqlとMongoの共通ID
    const sharedId = uuidv4();

    // PostgreSQL
    const postgresComment = await this.postgresCreateComment.createComment(
        sharedId,
        createCommentDto.userId,
        createCommentDto.novelId,
        createCommentDto.startIndex,
        createCommentDto.endIndex,
    );

    // MongoDB
    const mongoComment = await this.mongoCreateComment.createComment(
        sharedId,
        createCommentDto.comment
    );

    return { postgresComment, mongoComment };
  }

}
