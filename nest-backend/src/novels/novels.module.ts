import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NovelsController } from './novels.controller';
import { Novel, NovelSchema } from '../mongo/schema/novel.schema';
import { CommentsModule } from '../comments/comments.module';
import { Comment, CommentSchema } from '../mongo/schema/comment.schema';

// service
import { CreateNovelsService } from './services/create-novels.service';
import { GetAllNovelsService } from './services/get-all-novels.service';
import { GetNovelsByIdService } from './services/get-novel-by-id.service';
import { GetPreviewByIdService } from './services/get-preview-by-id.service';
import { DeleteNovelsService } from './services/delete-novels.service';
import { SearchNovelsService } from './services/search-novels.service';

// import { CommentsService } from '../comments/comments.service';
import { GetCommentsByNovelIdService } from '../comments/service/get-comments-by-novelid.service';
import { DeleteCommentsService } from '../comments/service/delete-comments.service';

// repository
import { MongoCreateNovelRepository } from './repositories/create-novels/mongo';
import { PostgresCreateNovelRepository } from './repositories/create-novels/postgres';
import { MongoDeleteNovelRepository } from './repositories/delete-novels/mongo';
import { PostgresDeleteNovelRepository } from './repositories/delete-novels/postgres';
import { MongoGetNovelByIdRepository } from './repositories/get-novel-by-id/mongo';
import { PostgresGetNovelByIdRepository } from './repositories/get-novel-by-id/postgres';
import { MongoGetAllNovelRepository } from './repositories/get-all-novels/mongo';
import { PostgresGetAllNovelRepository } from './repositories/get-all-novels/postgres';
import { MongoGetPreviewByIdRepository } from './repositories/get-preview-by-id/mongo';
import { PostgresGetPreviewByIdRepository } from './repositories/get-preview-by-id/postgres';
// import { MongoSearchNovelRepository } from './repositories/search-novels/mongo';
import { PostgresNovelRepository } from './repositories/search-novels/postgres';


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
    GetPreviewByIdService,
    DeleteNovelsService,
    SearchNovelsService,
    GetCommentsByNovelIdService,
    DeleteCommentsService,

    MongoCreateNovelRepository,
    PostgresCreateNovelRepository,
    MongoDeleteNovelRepository,
    PostgresDeleteNovelRepository,
    MongoGetNovelByIdRepository,
    PostgresGetNovelByIdRepository,
    MongoGetAllNovelRepository,
    PostgresGetAllNovelRepository,
    MongoGetPreviewByIdRepository,
    PostgresGetPreviewByIdRepository,
    // MongoSearchNovelRepository,
    PostgresNovelRepository,
  ],
  controllers: [NovelsController],
})
export class NovelsModule {}
