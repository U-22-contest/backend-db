import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LikeController } from './like.controller';

import { LikeNovelService } from "./services/like-novel.service";
import { RemoveLikeNovelService } from './services/remove-like-novel.service';

import { PostgresLikeNovelRepository } from "./repositories/like-novel/postgres";
import { PostgresRemoveLikeNovelRepository } from "./repositories/remove-like-novel/postgres";

@Module({
  imports: [PrismaModule],
  controllers: [LikeController],
  providers: [
    LikeNovelService,
    RemoveLikeNovelService,

    PostgresLikeNovelRepository,
    PostgresRemoveLikeNovelRepository,
  ],
  exports: []
})
export class LikeModule {}
