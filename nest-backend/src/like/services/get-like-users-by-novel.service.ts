import { Injectable } from '@nestjs/common';
import { GetLikeUsersByNovelResponse } from '../dto/get-like-users-by-novel.dto';
import { PostgresGetLikeUsersByNovelRepository } from '../repositories/get-like-users-by-novel/postgres';

@Injectable()
export class GetLikeUsersByNovelService {
  constructor(
    private readonly postgresGetLikeUsersByNovel: PostgresGetLikeUsersByNovelRepository,
  ) {}

  // すべてのいいね情報を一度に取得
  async getLikeUsers( novelId: string ): Promise<GetLikeUsersByNovelResponse[]> {

    // いいねした小説情報の取得
    const getLikeUsers = await this.postgresGetLikeUsersByNovel.getLikeUsers(novelId);

    return getLikeUsers.map(likeUser => ({
      id: likeUser.user.id,
      username: likeUser.user.username,
      profileImagePath: likeUser.user.profileImagePath,
      likedAt: likeUser.createdAt,
    }));
  }
}