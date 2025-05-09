import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from '../mongo/schema/comment.schema';

// import { CommentsService } from './service/comments.service';
import { CreateCommentsService } from './service/create-comments.service';
import { GetCommentsByNovelIdService } from './service/get-comments-by-novelid.service';
import { DeleteCommentsService } from './service/delete-comments.service';

// repositories
import { MongoCreateCommentRepository } from './repositories/create-comments/mongo';
import { PostgresCreateCommentRepository } from './repositories/create-comments/postgres';
import { MongoDeleteCommentRepository } from './repositories/delete-comments/mongo';
import { PostgresDeleteCommentRepository } from './repositories/delete-comments/postgres';
import { MongoGetCommentsByNovelIdRepository } from './repositories/get-comments-by-novelid/mongo';
import { PostgresGetCommentsByNovelIdRepository } from './repositories/get-comments-by-novelid/postgres';

@Module({
  imports: [
    PrismaModule,
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  providers: [
    // CommentsService,
    CreateCommentsService,
    GetCommentsByNovelIdService,
    DeleteCommentsService,

    MongoCreateCommentRepository,
    PostgresCreateCommentRepository,
    MongoDeleteCommentRepository,
    PostgresDeleteCommentRepository,
    MongoGetCommentsByNovelIdRepository,
    PostgresGetCommentsByNovelIdRepository,
  ],
  controllers: [CommentsController],
  exports: [
    MongoGetCommentsByNovelIdRepository,
    PostgresGetCommentsByNovelIdRepository,
    DeleteCommentsService,
    PostgresDeleteCommentRepository,
    MongoDeleteCommentRepository,
  ],
})
export class CommentsModule {}
