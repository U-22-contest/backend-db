import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostgresGetNovelByIdRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findNovelById(novelId: string, userId?:string) {

    return this.prisma.$transaction(async (tx) => {
      const novel = await tx.novel.findUnique({
        where: { id: novelId },
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
        }
      });

      if (!novel) {
        return null;
      }

      // ログインユーザーの場合のみ閲覧履歴を記録
      if (userId) {
        await tx.viewHistory.upsert({
          where: {
            userId_novelId: {
              userId: userId,
              novelId: novelId
            }
          },
          update: {}, // 既存レコードがある場合は何もしない
          create: {
            userId: userId,
            novelId: novelId
          }
        });
      }

      return novel;
    });
  }

  async getNovelViewCount(id: string) {
    return this.prisma.viewHistory.count({
      where: {
        novelId: id,
      }
    })
  }
}
