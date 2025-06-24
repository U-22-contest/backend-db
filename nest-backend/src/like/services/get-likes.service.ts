import { Injectable } from '@nestjs/common';
import { UserLikesResponse } from '../dto/get-likes.dto';
import { PostgresGetAllLikeRepository } from '../repositories/get-likes/postgres';


@Injectable()
export class GetLikesService {
    constructor(
        private readonly postgresGetAllLike: PostgresGetAllLikeRepository,
    ) {}

    // すべてのいいね情報を一度に取得
    async getAllLikes( userId: string ): Promise<UserLikesResponse> {

        // いいねした小説情報の取得
        const getLikeNovels = await this.postgresGetAllLike.getLikeNovel(userId);

        // いいねした文章情報の取得
        const getLikeSentences = await this.postgresGetAllLike.getLikeSentence(userId);

        return {
            likeNovels: getLikeNovels || [],
            likeSentences: getLikeSentences || [],
        };
    }
}