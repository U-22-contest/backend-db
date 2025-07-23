import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { LikeNovel } from '../../../../generated/postgresql';

@Injectable()
export class PostgresRemoveBookmarkRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findBookmarkRelation(userId: string, novelId: string) : Promise<LikeNovel | null> {
    return this.prisma.bookmark.findFirst({
      where: {
        userId,
        novelId,
      },
    });
  }

  async deleteBookmark( id: string ) : Promise<void> {
    await this.prisma.bookmark.delete({
      where: { id },
    });
  }

}
