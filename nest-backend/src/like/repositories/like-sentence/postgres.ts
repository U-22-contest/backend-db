import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel, LikeSentence } from '../../../../generated/postgresql';

@Injectable()
export class PostgresLikeSentenceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findNovelById(novelId: string) : Promise<Novel | null> {
    return this.prisma.novel.findUnique({
      where: { id: novelId }
    });
  }

  async findLikeSentenceRelation(userId: string, novelId: string, startIndex: number, endIndex: number) : Promise<LikeSentence | null> {
    return this.prisma.likeSentence.findFirst({
      where: {
        userId,
        novelId,
        startIndex,
        endIndex,
      },
    });
  }

  async createLikeSentence( userId: string, novelId: string, startIndex: number, endIndex: number) : Promise<LikeSentence> {
    return this.prisma.likeSentence.create({
      data: {
        userId,
        novelId,
        startIndex,
        endIndex,
      },
    });
  }

}
