import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel, Bookmark } from '../../../../generated/postgresql';

@Injectable()
export class PostgresBookmarkRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findNovelById(novelId: string) : Promise<Novel | null> {
    return this.prisma.novel.findUnique({
      where: { id: novelId }
    });
  }

  async findBookmarkRelation(userId: string, novelId: string) : Promise<Bookmark | null> {
    return this.prisma.bookmark.findFirst({
      where: {
        userId,
        novelId,
      },
    });
  }

  async createBookmark( userId: string, novelId: string ) : Promise<Bookmark> {
    return this.prisma.bookmark.create({
      data: {
        userId,
        novelId,
      }
    });
  }

}
