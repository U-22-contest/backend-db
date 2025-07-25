import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LikeController } from './like.controller';

import { GetLikeNovelsService } from "./services/get-like-novels.service";
import { GetLikeCommentsService } from "./services/get-like-comments.service";
import { GetLikeSentenceService } from "./services/get-like-sentence.service";
import { GetLikeUsersByNovelService } from "./services/get-like-users-by-novel.service";
import { LikeNovelService } from "./services/like-novel.service";
import { RemoveLikeNovelService } from './services/remove-like-novel.service';
import { LikeSentenceService } from "./services/like-sentence.service";
import { RemoveLikeSentenceService } from './services/remove-like-sentence.service';
import { LikeCommentService } from "./services/like-comment.service";
import { RemoveLikeCommentService } from './services/remove-like-comment.service';

import { PostgresGetLikeNovelsRepository } from "./repositories/get-like-novels/postgres";
import { PostgresGetLikeCommentsRepository } from "./repositories/get-like-comments/postgres";
import { PostgresGetLikeSentenceRepository } from "./repositories/get-like-sentence/postgres";
import { PostgresGetLikeUsersByNovelRepository } from "./repositories/get-like-users-by-novel/postgres";
import { PostgresLikeNovelRepository } from "./repositories/like-novel/postgres";
import { PostgresRemoveLikeNovelRepository } from "./repositories/remove-like-novel/postgres";
import { PostgresLikeSentenceRepository } from "./repositories/like-sentence/postgres";
import { PostgresRemoveLikeSentenceRepository } from "./repositories/remove-like-sentence/postgres";
import { PostgresLikeCommentRepository } from "./repositories/like-comment/postgres";
import { PostgresRemoveLikeCommentRepository } from "./repositories/remove-like-comment/postgres";

import { NovelsModule } from "../novels/novels.module";

@Module({
  imports: [
    PrismaModule,
    NovelsModule,
  ],
  controllers: [LikeController],
  providers: [
    GetLikeNovelsService,
    GetLikeCommentsService,
    GetLikeSentenceService,
    GetLikeUsersByNovelService,
    LikeNovelService,
    RemoveLikeNovelService,
    LikeSentenceService,
    RemoveLikeSentenceService,
    LikeCommentService,
    RemoveLikeCommentService,

    PostgresGetLikeNovelsRepository,
    PostgresGetLikeCommentsRepository,
    PostgresGetLikeSentenceRepository,
    PostgresGetLikeUsersByNovelRepository,
    PostgresLikeNovelRepository,
    PostgresRemoveLikeNovelRepository,
    PostgresLikeSentenceRepository,
    PostgresRemoveLikeSentenceRepository,
    PostgresLikeCommentRepository,
    PostgresRemoveLikeCommentRepository,
  ],
  exports: []
})
export class LikeModule {}
