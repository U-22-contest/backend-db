import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel as PrismaNovel } from '../../../../generated/postgresql';

@Injectable()
export class PostgresGetAllNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllNovel() {
    return this.prisma.novel.findMany({
      include: {
        _count: {
          select: {
            viewHistory: true,
            likes: true,
          }
        }
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
