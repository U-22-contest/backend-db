import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from '../mongo/schema/comment.schema';

// import { CommentsService } from './service/comments.service';
import { CreateCommentsService } from './service/create-comments.service';
import { GetCommentsByNovelIdService } from './service/get-comments-by-novelid.service';
import { DeleteCommentsService } from './service/delete-comments.service';

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
  ],
  controllers: [CommentsController],
  exports: [DeleteCommentsService],
})
export class CommentsModule {}
