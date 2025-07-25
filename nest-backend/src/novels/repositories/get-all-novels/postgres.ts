import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostgresGetAllNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllNovel() {
    return this.prisma.novel.findMany({
      include: {
        author: {
          select: {
            id: true,
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
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
