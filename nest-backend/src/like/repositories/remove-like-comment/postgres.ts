import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { LikeComment } from '../../../../generated/postgresql';

@Injectable()
export class PostgresRemoveLikeCommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findLikeCommentRelation(userId: string, commentId: string) : Promise<LikeComment | null> {
    return this.prisma.likeComment.findFirst({
      where: {
        userId,
        commentId,
      },
    });
  }

  async deleteLikeComment( id: string ) : Promise<void> {
    await this.prisma.likeComment.delete({
      where: { id },
    });
  }

}
