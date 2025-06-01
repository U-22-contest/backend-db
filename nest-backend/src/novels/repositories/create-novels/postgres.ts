import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel as PrismaNovel } from '../../../../generated/postgresql';

@Injectable()
export class PostgresCreateNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createNovel(
    sharedId: string,
    authorId: string,
    title: string,
    categories: string[], // Add categoryId as a parameter
  ): Promise<PrismaNovel> {
    return this.prisma.novel.create({
      data: {
        sharedId,
        authorId,
        title,
        categories: {
          connect: categories.map((categoryId) => ({ categoryId })),
        },
      },
    });
  }
}
