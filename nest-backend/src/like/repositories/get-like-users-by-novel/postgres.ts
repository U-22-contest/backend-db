import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostgresGetLikeUsersByNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getLikeUsers(novelId: string)  {
    return this.prisma.likeNovel.findMany({
      where: { novelId },
      select: {
        createdAt: true,
        user: {
          select: {
            id: true,
            username: true,
            profileImagePath: true,
          }
        },
      },
      orderBy: { createdAt: 'desc' }
    })
  }

}