import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Comment, LikeComment } from '../../../../generated/postgresql';

@Injectable()
export class PostgresLikeCommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findCommentById(commentId: string) : Promise<Comment | null> {
    return this.prisma.comment.findUnique({
      where: { id: commentId }
    });
  }

  async findLikeCommentRelation(userId: string, commentId: string) : Promise<LikeComment | null> {
    return this.prisma.likeComment.findFirst({
      where: {
        userId,
        commentId,
      },
    });
  }

  async createLikeComment( userId: string, commentId: string ) : Promise<LikeComment> {
    return this.prisma.likeComment.create({
      data: {
        userId,
        commentId,
      },
    });
  }

}
