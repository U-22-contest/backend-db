import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostgresGetLikeCommentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getLikeComment(userId: string)  {
    return this.prisma.likeComment.findMany({
      where: { userId },
      include: {
        comment: {
          select: {
            id: true,
            startIndex: true,
            endIndex: true,
            createdAt: true,
            updatedAt: true,
            //コメント投稿者
            user: {
              select: {
                username: true,
                profileImagePath: true,
              }
            },
            //コメントしてる小説情報
            //TODO: 必要なければ削除
            novel: {
              select: {
                id: true,
                title: true,
                coverImagePath: true,
              }
            },
            _count: {
              select: {
                likesComment: true,
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
  }

}