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
import { DeleteNovelsService } from './services/delete-novels.service';
import { SearchNovelsService } from './services/search-novels';

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
import { MongoSearchNovelRepository } from './repositories/search-novels/mongo';
import { PostgresNovelRepository } from './repositories/search-novels/postgres';
import { CategoriesModule } from 'src/categories/categories.module';
import { MulterModule } from '@nestjs/platform-express';
// import { SearchAuthor } from './repositories';
import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuid4 } from 'uuid';
@Module({
  imports: [
    CommentsModule,
    PrismaModule,
    MongooseModule.forFeature([
      { name: Novel.name, schema: NovelSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
    CategoriesModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/covers', // プロジェクトのルートディレクトリからの相対パス
        filename: (req, file, callback) => {
          const ext = path.extname(file.originalname);
          const filename = `$${uuid4()}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  ],
  providers: [
    // NovelsService,
    CreateNovelsService,
    GetAllNovelsService,
    GetNovelsByIdService,
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
    MongoSearchNovelRepository,
    PostgresNovelRepository,
  ],
  controllers: [NovelsController],
})
export class NovelsModule {}
