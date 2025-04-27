import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PrismaService } from '../../prisma/prisma.service';
import { Error, Model } from 'mongoose';
import { Novel, NovelDocument } from '../../mongo/schema/novel.schema';
import { Comment, CommentDocument } from '../../mongo/schema/comment.schema';
import { Novel as PrismaNovel } from "../../../generated/postgresql";

export type GetNovelByIdResponse = {
  psqlNovel: PrismaNovel;
  mongoNovel: NovelDocument;
};

@Injectable()
export class GetNovelsByIdService {
  constructor(
    @InjectModel(Novel.name) private novelModel: Model<NovelDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private prisma: PrismaService,
  ) {}

  //id指定で取得
  async getNovelById(id: string) : Promise<GetNovelByIdResponse> {
    const psqlNovel = await this.prisma.novel.findUnique({ where: { id } });
    if (!psqlNovel) throw new Error('該当する小説がありません');

    //小説内容の取得
    const mongoNovel = await this.novelModel.findOne({ sharedId: psqlNovel.sharedId });
    if (!mongoNovel) throw new Error('該当する小説内容がありません');
    return { psqlNovel, mongoNovel };
  }
}
