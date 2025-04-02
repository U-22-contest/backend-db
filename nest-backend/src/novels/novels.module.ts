import { Module } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { NovelsController } from './novels.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Novel, NovelSchema } from '../mongo/schema/novel.schema';
import { CommentsModule } from "../comments/comments.module";
import { CommentsService } from "../comments/comments.service";
import {Comment, CommentSchema} from "../mongo/schema/comment.schema";

@Module({
  imports: [
    CommentsModule,
    PrismaModule,
    MongooseModule.forFeature([
      { name: Novel.name, schema: NovelSchema },
      { name: Comment.name, schema: CommentSchema }
    ]),
  ],
  providers: [NovelsService, CommentsService],
  controllers: [NovelsController],
})
export class NovelsModule {}
