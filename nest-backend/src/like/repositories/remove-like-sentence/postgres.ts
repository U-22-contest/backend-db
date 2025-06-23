import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { LikeSentence } from '../../../../generated/postgresql';

@Injectable()
export class PostgresRemoveLikeSentenceRepository {
  constructor(private readonly prisma: PrismaService) {}

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

  async deleteLikeSentence( id: string ) : Promise<void> {
    await this.prisma.likeSentence.delete({
      where: { id },
    });
  }

}
