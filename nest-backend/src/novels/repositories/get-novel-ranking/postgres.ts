import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { RankingPeriod } from '../../dto/request/get-novels-ranking.dto';

@Injectable()
export class PostgresGetNovelRankingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findNovelByLikeRanking(
    period: RankingPeriod,
    limit: number = 20,
    offset: number = 0,
    categoryName?: string,
  ) {
    const dateFilter = this.getDateFilter(period);
    const whereCondition = this.buildWhereCondition(dateFilter, categoryName);

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
            bookmark: dateFilter ? { where: dateFilter } : true,
          },
        },
      },
      where: whereCondition,
      orderBy: {
        likes: { _count: 'desc' }
      },
      take: limit,
      skip: offset,
    });
  }

  private buildWhereCondition(dateFilter: any, categoryName?: string) {
    const conditions: any = {};

    // 期間フィルター
    if (dateFilter) {
      conditions.likes = { some: dateFilter };
    }

    // カテゴリーフィルター
    if (categoryName) {
      conditions.categories = {
        some: {
          categoryName: categoryName
        }
      };
    }

    return Object.keys(conditions).length > 0 ? conditions : undefined;
  }


  private getDateFilter(period: string) {
    const now = new Date();

    switch (period) {
      case RankingPeriod.WEEKLY:
        const weekAgo = new Date();
        weekAgo.setDate(now.getDate() - 7);
        return { createdAt: { gte: weekAgo } };

      case RankingPeriod.MONTHLY:
        const monthAgo = new Date();
        monthAgo.setMonth(now.getMonth() - 1);
        return { createdAt: { gte: monthAgo } };

      case RankingPeriod.ALL_TIME:
      default:
        return null;
    }
  }

}
