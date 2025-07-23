import { Injectable } from '@nestjs/common';
import { GetLikeNovelResponse } from '../dto/get-like-novels.dto';
import { PostgresGetLikeNovelsRepository } from '../repositories/get-like-novels/postgres';


@Injectable()
export class GetLikeNovelsService {
  constructor(
    private readonly postgresGetLikeNovels: PostgresGetLikeNovelsRepository,
  ) {}

  // すべてのいいね情報を一度に取得
  async getLikeNovels( userId: string ): Promise<GetLikeNovelResponse[] | null> {

    // いいねした小説情報の取得
    const getLikeNovels = await this.postgresGetLikeNovels.getLikeNovel(userId);

    const likeNovels = getLikeNovels.map((likeNovel) => {
      return {
        ...likeNovel,
        novel: {
          ...likeNovel.novel,
          categories: likeNovel.novel.categories.map(cat => cat.categoryName),
        }
      };
    });

    return likeNovels;
  }
}