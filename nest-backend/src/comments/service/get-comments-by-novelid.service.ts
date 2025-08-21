import { Injectable } from '@nestjs/common';
import { PostgresGetCommentsByNovelIdRepository } from '../repositories/get-comments-by-novelid/postgres'
import { MongoGetCommentsByNovelIdRepository } from '../repositories/get-comments-by-novelid/mongo'
import { GetCommentsByNovelIdResponse } from '../dto/get-comment-by-novelid.dto'


@Injectable()
export class GetCommentsByNovelIdService {
  constructor(
    private readonly postgresGetCommentsByNovelId: PostgresGetCommentsByNovelIdRepository,
    private readonly mongoGetCommentsByNovelId: MongoGetCommentsByNovelIdRepository
  ) {}

  //コメント取得
  async getCommentsByNovelId(novelId: string) : Promise<GetCommentsByNovelIdResponse[]> {
    const psqlComments = await this.postgresGetCommentsByNovelId.getCommentsByNovelId(novelId);

    //psqlCommentsのsharedIdからコメントを取得
    const sharedIds = psqlComments.map((comment) => comment.sharedId);
    const mongoComments = await this.mongoGetCommentsByNovelId.getCommentsByNovelId(sharedIds);

    const comments = psqlComments.map((psqlComment) => {
      // Mongoのコメントを対応するsharedIdで取得
      const mongoComment = mongoComments.find(
          (mongo) => mongo.sharedId === psqlComment.sharedId,
      );
      return {
        ...psqlComment,
        comment: mongoComment?.comment ?? '',
      };
    });

    return comments;
  }
}
