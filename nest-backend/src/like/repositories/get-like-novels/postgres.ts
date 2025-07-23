import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostgresGetLikeNovelsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getLikeNovel(userId: string)  {
    return this.prisma.likeNovel.findMany({
      where: { userId },
      include: {
        novel: {
          select: {
            id: true,
            sharedId: true,
            coverImagePath: true,
            categories: {
              select: {
                categoryName: true,
              }
            },
            createdAt: true,
            updatedAt: true,
            author: {
              select: {
                username: true,
                profileImagePath: true,
              }
            },
            _count: {
              select: {
                likes: true,
                bookmark: true,
                viewHistory: true,
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
  }

}