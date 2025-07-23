import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostgresGetLikeSentenceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getLikeSentence(userId: string)　{
    return this.prisma.likeSentence.findMany({
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
      orderBy: [
        { novelId: 'asc' },
        { startIndex: 'asc' }
      ],
    })
  }

}