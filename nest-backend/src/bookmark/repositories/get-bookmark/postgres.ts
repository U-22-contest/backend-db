import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { LikeNovel } from '../../../../generated/postgresql';

@Injectable()
export class PostgresGetBookmarkRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getBookmarks(userId: string)  {
    return this.prisma.bookmark.findMany({
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