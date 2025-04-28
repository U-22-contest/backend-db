import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NovelsController } from './novels.controller';
import { Novel, NovelSchema } from '../mongo/schema/novel.schema';
import { CommentsModule } from '../comments/comments.module';
import { Comment, CommentSchema } from '../mongo/schema/comment.schema';

// service
// import { NovelsService } from './services/novels.service';
import { CreateNovelsService } from './services/create-novels.service';
import { GetAllNovelsService } from './services/get-all-novels.service';
import { GetNovelsByIdService } from './services/get-novel-by-id.service';
import { DeleteNovelsService } from './services/delete-novels.service';
import { SearchNovelsService } from './services/search-novels.service';

// import { CommentsService } from '../comments/comments.service';
import { GetCommentsByNovelIdService } from '../comments/service/get-comments-by-novelid.service';
import { DeleteCommentsService } from '../comments/service/delete-comments.service';

@Module({
  imports: [
    CommentsModule,
    PrismaModule,
    MongooseModule.forFeature([
      { name: Novel.name, schema: NovelSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
  ],
  providers: [
    // NovelsService,
    CreateNovelsService,
    GetAllNovelsService,
    GetNovelsByIdService,
    DeleteNovelsService,
    GetCommentsByNovelIdService,
    DeleteCommentsService,
    SearchNovelsService,
  ],
  controllers: [NovelsController],
})
export class NovelsModule {}
