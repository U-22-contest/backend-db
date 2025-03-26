import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from '../mongo/schema/comment.schema';
import { Error, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private prisma: PrismaService,
  ) {}


  // コメント投稿
  async create(createCommentDto: CreateCommentDto) {
    // PostgresqlとMongoの共通ID
    const sharedId = uuidv4();

    // PostgreSQL
    const postgresComment = await this.prisma.comment.create({
      data: {
        sharedId: sharedId,
        userId: createCommentDto.userId,
        novelId: createCommentDto.novelId,
        startIndex: createCommentDto.startIndex,
        endIndex: createCommentDto.endIndex,
      },
    });

    // MongoDB
    const mongoComment = new this.commentModel({
      sharedId: sharedId,
      comment: createCommentDto.comment,
    });
    await mongoComment.save();

    return { postgresComment, mongoComment };
  }


  //コメント取得
  async findByNovelId(novelId: string) {
    const psqlComments = await this.prisma.comment.findMany({
      where: { novelId },
      orderBy: { createdAt: 'desc' },
    })

    //psqlCommentsのsharedIdからコメントを取得
    const sharedIds = psqlComments.map((comment) => comment.sharedId);
    const mongoComments = await this.commentModel.find({ sharedId: { $in: sharedIds } }).cursor().toArray();

    return { postgres: psqlComments, mongo: mongoComments }
  }


  //コメント削除
  async deleteBySharedId(id: string, userId: string) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });

    //コメントの有無の判断と、投稿者のみ削除
    if (!comment) throw new Error('コメントが見つかりません');
    if (comment.userId !== userId) throw new Error('権限がありません');

    //postgresql mongo 各削除
    await this.prisma.comment.delete({ where: { id } });
    await this.commentModel.deleteOne({ sharedId: comment.sharedId });

    return { message: 'コメント削除' };
  }
}
