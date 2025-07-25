import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LikeController } from './like.controller';

import { GetLikeNovelsService } from "./services/get-like-novels.service";
import { GetLikeSentenceService } from "./services/get-like-sentence.service";
import { LikeNovelService } from "./services/like-novel.service";
import { RemoveLikeNovelService } from './services/remove-like-novel.service';
import { LikeSentenceService } from "./services/like-sentence.service";
import { RemoveLikeSentenceService } from './services/remove-like-sentence.service';
import { GetLikeUsersByNovelService } from './services/get-like-users-by-novel.service';

import { PostgresGetLikeNovelsRepository } from "./repositories/get-like-novels/postgres";
import { PostgresGetLikeSentenceRepository } from "./repositories/get-like-sentence/postgres";
import { PostgresLikeNovelRepository } from "./repositories/like-novel/postgres";
import { PostgresRemoveLikeNovelRepository } from "./repositories/remove-like-novel/postgres";
import { PostgresLikeSentenceRepository } from "./repositories/like-sentence/postgres";
import { PostgresRemoveLikeSentenceRepository } from "./repositories/remove-like-sentence/postgres";
import { PostgresGetLikeUsersByNovelRepository } from "./repositories/get-like-users-by-novel/postgres";

import { NovelsModule } from "../novels/novels.module";

@Module({
  imports: [
    PrismaModule,
    NovelsModule,
  ],
  controllers: [LikeController],
  providers: [
    GetLikeNovelsService,
    GetLikeSentenceService,
    LikeNovelService,
    RemoveLikeNovelService,
    LikeSentenceService,
    RemoveLikeSentenceService,
    GetLikeUsersByNovelService,

    PostgresGetLikeNovelsRepository,
    PostgresGetLikeSentenceRepository,
    PostgresLikeNovelRepository,
    PostgresRemoveLikeNovelRepository,
    PostgresLikeSentenceRepository,
    PostgresRemoveLikeSentenceRepository,
    PostgresGetLikeUsersByNovelRepository,
  ],
  exports: []
})
export class LikeModule {}
