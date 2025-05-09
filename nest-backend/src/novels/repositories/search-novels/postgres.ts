import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostgresNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAuthorIdBySharedId(sharedId: string): Promise<string | null> {
    const result = await this.prisma.novel.findUnique({
      where: { sharedId },
      select: { authorId: true },
    });
    return result?.authorId || null;
  }
}
