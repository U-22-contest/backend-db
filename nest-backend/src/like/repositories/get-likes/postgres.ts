import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { LikeNovel, LikeSentence } from '../../../../generated/postgresql';

@Injectable()
export class PostgresGetAllLikeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getLikeNovel(userId: string) : Promise<LikeNovel[] | null> {
    return this.prisma.likeNovel.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })
  }

  async getLikeSentence(userId: string) : Promise<LikeSentence[] | null> {
    return this.prisma.likeSentence.findMany({
      where: { userId },
      orderBy: [
        { novelId: 'asc' },
        { startIndex: 'asc' }
      ],
    })
  }

}