import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LikeController } from './like.controller';

import { GetLikesService } from "./services/get-likes.service";
import { LikeNovelService } from "./services/like-novel.service";
import { RemoveLikeNovelService } from './services/remove-like-novel.service';
import { LikeSentenceService } from "./services/like-sentence.service";
import { RemoveLikeSentenceService } from './services/remove-like-sentence.service';

import { PostgresGetAllLikeRepository } from "./repositories/get-likes/postgres";
import { PostgresLikeNovelRepository } from "./repositories/like-novel/postgres";
import { PostgresRemoveLikeNovelRepository } from "./repositories/remove-like-novel/postgres";
import { PostgresLikeSentenceRepository } from "./repositories/like-sentence/postgres";
import { PostgresRemoveLikeSentenceRepository } from "./repositories/remove-like-sentence/postgres";

@Module({
  imports: [PrismaModule],
  controllers: [LikeController],
  providers: [
    GetLikesService,
    LikeNovelService,
    RemoveLikeNovelService,
    LikeSentenceService,
    RemoveLikeSentenceService,

    PostgresGetAllLikeRepository,
    PostgresLikeNovelRepository,
    PostgresRemoveLikeNovelRepository,
    PostgresLikeSentenceRepository,
    PostgresRemoveLikeSentenceRepository,
  ],
  exports: []
})
export class LikeModule {}
