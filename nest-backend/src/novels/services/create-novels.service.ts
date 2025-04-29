import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateNovelDto } from '../dto/create-novel.dto';
import { v4 as uuidv4 } from 'uuid';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from '../../mongo/schema/comment.schema';
import { CreateNovelResponse } from '../types/novel.types';
import { Novel, NovelDocument } from "../../mongo/schema/novel.schema";

@Injectable()
export class CreateNovelsService {
  constructor(
    @InjectModel(Novel.name) private novelModel: Model<NovelDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private prisma: PrismaService,
  ) {}

  //小説投稿
  async createNovel(
    createNovelDto: CreateNovelDto,
  ): Promise<CreateNovelResponse> {
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
}
