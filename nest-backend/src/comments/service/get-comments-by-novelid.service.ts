import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from '../../mongo/schema/comment.schema';
import { Model } from 'mongoose';
import { Comment as PrismaComment } from "../../../generated/postgresql";

export type GetCommentsByNovelIdResponse = {
  psqlComments: PrismaComment[];
  mongoComments: CommentDocument[];
};

@Injectable()
export class GetCommentsByNovelIdService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private prisma: PrismaService,
  ) {}

  //コメント取得
  async getCommentsByNovelId(novelId: string) : Promise<GetCommentsByNovelIdResponse> {
    const psqlComments = await this.prisma.comment.findMany({
      where: { novelId },
      orderBy: { createdAt: 'desc' },
    })

    //psqlCommentsのsharedIdからコメントを取得
    const sharedIds = psqlComments.map((comment) => comment.sharedId);

    const mongoComments = await this.commentModel.find({ sharedId: { $in: sharedIds } }).cursor().toArray();
    return { psqlComments, mongoComments }

  }
}
