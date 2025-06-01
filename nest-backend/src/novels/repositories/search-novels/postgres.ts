import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel } from '../../types/novel.types';
import { SearchNovelsDto } from 'src/novels/dto/search-novels.dto';
import { Prisma } from 'generated/postgresql';

@Injectable()
export class PostgresNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async searchByQuery(query: SearchNovelsDto): Promise<Novel[]> {
    const { title, author, categories } = query;

    const where: Prisma.NovelWhereInput = {};

    // タイトル検索
    if (title) {
      where.title = {
        contains: title,
        mode: 'insensitive',
      };
    }

    // 著者検索
    if (author) {
      where.author = {
        is: {
          username: {
            contains: author,
            mode: 'insensitive',
          },
        },
      };
    }

    // カテゴリリストの準備
    const categoryList = Array.isArray(categories)
      ? categories
      : categories
        ? [categories]
        : [];

    // カテゴリがある場合のみ、OR 条件で初期フィルタ
    if (categoryList.length > 0) {
      where.categories = {
        some: {
          categoryName: {
            in: categoryList,
            mode: 'insensitive',
          },
        },
      };
    }

    // 一度すべて取得（カテゴリでORフィルタされたもの含む）
    const rowResults = await this.prisma.novel.findMany({
      where,
      select: {
        sharedId: true,
        authorId: true,
        title: true,
        createdAt: true,
        author: {
          select: {
            id: true,
            username: true,
          },
        },
        categories: {
          select: {
            categoryName: true,
          },
        },
      },
    });

    // カテゴリがない場合、そのまま返す
    if (categoryList.length === 0) {
      return rowResults.map((result) => ({
        sharedId: result.sharedId,
        title: result.title,
        authorId: result.author.id,
        username: result.author.username,
        categories: result.categories.map((cat) => cat.categoryName),
        createdAt: result.createdAt,
      }));
    }

    // AND 条件を満たすものだけに絞る
    const filtered = rowResults
      .filter((novel) => {
        const lowerNames = novel.categories.map((c) =>
          c.categoryName.toLowerCase(),
        );
        return categoryList.every((cat) =>
          lowerNames.includes(cat.toLowerCase()),
        );
      })
      .map((result) => ({
        sharedId: result.sharedId,
        title: result.title,
        authorId: result.author.id,
        username: result.author.username,
        categories: result.categories.map((cat) => cat.categoryName),
        createdAt: result.createdAt,
      }));

    return filtered;
  }
}
