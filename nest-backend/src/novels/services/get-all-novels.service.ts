import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PrismaService } from '../../prisma/prisma.service';
import { Error, Model } from 'mongoose';
import { Novel, NovelDocument } from '../../mongo/schema/novel.schema';
import { Comment, CommentDocument } from '../../mongo/schema/comment.schema';
import { Novel as PrismaNovel } from '../../../generated/postgresql';

export type GetAllNovelsResponse = {
  psqlNovels: PrismaNovel[];
  mongoNovels: NovelDocument[];
};

@Injectable()
export class GetAllNovelsService {
  constructor(
    @InjectModel(Novel.name) private novelModel: Model<NovelDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private prisma: PrismaService,
  ) {}

  //全小説の取得
  async getAllNovel(): Promise<GetAllNovelsResponse> {
    const psqlNovels = await this.prisma.novel.findMany({
      orderBy: { createdAt: 'desc' },
    });
    if (!psqlNovels) throw new Error('小説が投稿されていません');

    //内容取得
    const mongoNovels = await this.novelModel.find();
    return { psqlNovels, mongoNovels };
  }
}
