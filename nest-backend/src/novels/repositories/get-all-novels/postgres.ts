import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel as PrismaNovel } from '../../../../generated/postgresql';

@Injectable()
export class PostgresGetAllNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllNovel(): Promise<PrismaNovel[]> {
    return this.prisma.novel.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
