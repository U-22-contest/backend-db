import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { LikeNovel } from '../../../../generated/postgresql';

@Injectable()
export class PostgresGetBookmarkRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getBookmarks(userId: string) : Promise<LikeNovel[] | null> {
    return this.prisma.bookmark.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })
  }

}