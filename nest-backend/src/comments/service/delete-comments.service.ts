import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from '../../mongo/schema/comment.schema';
import { Error, Model } from 'mongoose';

@Injectable()
export class DeleteCommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private prisma: PrismaService,
  ) {}

  //コメント削除
  async deleteComment(id: string, userId: string) : Promise<{message: string}> {
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
