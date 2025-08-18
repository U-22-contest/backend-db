import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel as PrismaNovel } from '../../../../generated/postgresql';
import { EditNovelsDto } from 'src/novels/dto/request/edit-novel.dto';

@Injectable()
export class postgresEditNovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByAuthor(id: string, userId: string): Promise<PrismaNovel | null> {
    return this.prisma.novel.findFirst({
      where: {
        id,
        authorId: userId,
      },
    });
  }

  async updateTimestamp(id: string): Promise<PrismaNovel> {
    return this.prisma.novel.update({
      where: {id},
      data: {
        updatedAt: new Date(), // 明示的に現在時刻を設定
      },
    });
  }

  async updateNovel(id: string, editDto: EditNovelsDto): Promise<PrismaNovel> {

    const updateData: any = {}

    if (editDto.title) {
      updateData.title = editDto.title;
    }

    if (editDto.categories) {
      updateData.categories = {
        set: [],
        connectOrCreate: editDto.categories.map((name) => ({
          where: { categoryName: name },
          create: { categoryName: name },
        })),
      };
    }

    if (editDto.coverImagePath !== undefined) {
      updateData.coverImagePath = editDto.coverImagePath;
    }

    return this.prisma.novel.update({
      where: { id },
      data: updateData,
    })
  }
}
