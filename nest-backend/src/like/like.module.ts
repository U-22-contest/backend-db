import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LikeController } from './like.controller';

import { LikeNovelService } from "./services/like-novel.service";
import { RemoveLikeNovelService } from './services/remove-like-novel.service';

@Module({
  imports: [PrismaModule],
  controllers: [LikeController],
  providers: [
    LikeNovelService,
    RemoveLikeNovelService,
  ],
  exports: []
})
export class LikeModule {}
