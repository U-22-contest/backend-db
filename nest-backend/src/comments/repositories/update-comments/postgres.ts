import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Comment as PrismaComment } from '../../../../generated/postgresql';

@Injectable()
export class PostgresUpdateCommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findCommentAndUpdate(id: string, userId: string): Promise<PrismaComment> {
    try {
      return this.prisma.comment.update({
        where: {
          id,
          userId,
        },
        data: {
          updatedAt: new Date(),
        },
      });

    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error('コメントがないか、権限がありません。')
      }
      throw error;
    }
  }
}
