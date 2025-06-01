import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel } from '../../types/novel.types';
import { SearchNovelsDto } from 'src/novels/dto/search-novels.dto';
import { Prisma } from 'generated/postgresql';

@Injectable()
export class PostgresNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async searchByQuery(query: SearchNovelsDto): Promise<Novel[]> {
    const { title, author, category } = query;

    const where: Prisma.NovelWhereInput = {};

    if (title) {
      where.title = {
        contains: title,
        mode: 'insensitive',
      };
    }

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

    if (category) {
      where.categories = {
        some: {
          categoryName: {
            contains: category,
            mode: 'insensitive',
          },
        },
      };
    }

    const results = await this.prisma.novel.findMany({
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

    return results.map((result) => ({
      sharedId: result.sharedId,
      title: result.title,
      authorId: result.author.id,
      username: result.author.username,
      categories: result.categories.map((cat) => cat.categoryName),
      createdAt: result.createdAt,
    }));
  }
}
