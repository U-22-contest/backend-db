import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel, LikeNovel } from '../../../../generated/postgresql';

@Injectable()
export class PostgresLikeNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findNovelById(novelId: string) : Promise<Novel | null> {
    return this.prisma.novel.findUnique({
      where: { id: novelId }
    });
  }

  async findLikeNovelRelation(userId: string, novelId: string) : Promise<LikeNovel | null> {
    return this.prisma.likeNovel.findFirst({
      where: {
        userId,
        novelId,
      },
    });
  }

  async createLikeNovel( userId: string, novelId: string ) : Promise<LikeNovel> {
    return this.prisma.likeNovel.create({
      data: {
        userId,
        novelId,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
  }

}
