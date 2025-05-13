import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel } from '../../types/novel.types';


@Injectable()
export class PostgresNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async searchByKeyword(keyword: string): Promise<Novel[]> {
    // PostgreSQL でタイトルに基づくキーワード検索を実行
    const results = await this.prisma.novel.findMany({
      where: {
        title: {
          contains: keyword,
          mode: 'insensitive', // 大文字小文字を区別しない
        },
      },
      select: {
        sharedId: true,
        authorId: true,
        title: true,
      },
    });

    return results.map(result => ({
      sharedId: result.sharedId,
      authorId: result.authorId,
      title: result.title,
    }));
  }
}