import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostgresGetNovelRankingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findNovelByLikeRanking(
    period: string,
    limit: number = 20,
    offset: number = 0,
  ) {
    const dateFilter = this.getDateFilter(period);

    return this.prisma.novel.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
            profileImagePath: true,
          }
        },
        categories: true,
        _count: {
          select: {
            likes: dateFilter ? { where: dateFilter } : true,
          },
        },
      },
      orderBy: {
        likes: { _count: 'desc' }
      },
      where: dateFilter ? {
        likes: { some: dateFilter }
      } : undefined,
      take: limit,
      skip: offset,
    });
  }

  private getDateFilter(period: string) {
    const now = new Date();

    switch (period) {
      case 'weekly':
        const weekAgo = new Date();
        weekAgo.setDate(now.getDate() - 7);
        return { createdAt: { gte: weekAgo } };

      case 'monthly':
        const monthAgo = new Date();
        monthAgo.setMonth(now.getMonth() - 1);
        return { createdAt: { gte: monthAgo } };

      case 'all_time':
      default:
        return null; // フィルタなし
    }
  }

}
