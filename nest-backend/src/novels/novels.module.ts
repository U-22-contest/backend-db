import { Module } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { NovelsController } from './novels.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Novel, NovelSchema } from '../mongo/schema/novel.schema';

@Module({
  imports: [
    PrismaModule,
    MongooseModule.forFeature([{ name: Novel.name, schema: NovelSchema }]),
  ],
  providers: [NovelsService],
  controllers: [NovelsController],
})
export class NovelsModule {}
