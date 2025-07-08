import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Comment as PrismaComment } from '../../../../generated/postgresql';

@Injectable()
export class PostgresUpdateCommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findCommentById(id: string): Promise<PrismaComment | null> {
    return this.prisma.comment.findUnique({
      where: { id },
    });
  }
}
