import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { CommentsService } from "../comments/comments.service";
import { v4 as uuidv4 } from 'uuid';
import { Error, Model } from 'mongoose';
import { Novel, NovelDocument } from '../mongo/schema/novel.schema';
import { Comment, CommentDocument } from "../mongo/schema/comment.schema";

@Injectable()
export class NovelsService {
  constructor(
    @InjectModel(Novel.name) private novelModel: Model<NovelDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private prisma: PrismaService,
    private commentsService: CommentsService,
  ) {}

  //小説投稿
  async createNovel(createNovelDto: CreateNovelDto) {
    const sharedId = uuidv4();

    // PostgreSQLに保存
    const postgresNovel = await this.prisma.novel.create({
      data: {
        sharedId: sharedId,
        authorId: createNovelDto.authorId,
      },
    });

    // MongoDBに保存
    const mongoNovel = new this.novelModel({
      sharedId: sharedId,
      title: createNovelDto.title,
      content: createNovelDto.content,
    });
    await mongoNovel.save();

    return { postgresNovel, mongoNovel };
  }

  //全小説の取得
  async getAllNovel() {
    const psqlNovels = await this.prisma.novel.findMany({ orderBy: { createdAt: 'desc' } });
    if (!psqlNovels) throw new Error('小説が投稿されていません');
    return psqlNovels;

    //内容取得　
    // const mongoNovels = await this.novelModel.find()
    // return { psqlNovels, mongoNovels };
  }

  //id
  async getNovelById(id: string) {
    const psqlNovel = await this.prisma.novel.findUnique({ where: { id } });
    if (!psqlNovel) throw new Error('該当する小説がありません');
    return psqlNovel;

    //小説内容の取得
    // const mongoNovel = await this.novelModel.findOne({ sharedId: psqlNovel.sharedId });
    // return { psqlNovel, mongoNovel };
  }

  //小説の削除
  async deleteNovel(id: string, userId: string) {
    const psqlNovelDelete = await this.prisma.novel.findUnique({ where: { id } });
    if (!psqlNovelDelete) throw new Error('該当小説がありません');
    if (psqlNovelDelete.authorId !== userId) throw new Error('権限がありません');

    const deleteComments = await this.commentsService.findByNovelId(id);
    const commentsId = deleteComments.map((comment) => comment.id);

    await Promise.all(commentsId.map(async (commentId) => {
      await this.commentsService.deleteById(commentId, userId);
    }))

    await this.prisma.novel.delete({ where: { id } });
    const sharedId = psqlNovelDelete.sharedId;
    await this.novelModel.deleteOne({ sharedId })

    return { message: 'successfully deleted novel' }
  }
}
