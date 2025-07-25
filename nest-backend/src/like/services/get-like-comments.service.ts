import { Injectable } from '@nestjs/common';
import { GetLikeCommentResponse } from '../dto/get-like-comments.dto';
import { PostgresGetLikeCommentsRepository } from '../repositories/get-like-comments/postgres';

@Injectable()
export class GetLikeCommentsService {
  constructor(
    private readonly postgresGetLikeComments: PostgresGetLikeCommentsRepository,
  ) {}

  // すべてのいいねしてるコメント情報を一度に取得
  async getLikeComments( userId: string ): Promise<GetLikeCommentResponse[] | null> {

    // いいねした小説情報の取得
    const getLikeComments = await this.postgresGetLikeComments.getLikeComment(userId);

    return getLikeComments;
  }
}