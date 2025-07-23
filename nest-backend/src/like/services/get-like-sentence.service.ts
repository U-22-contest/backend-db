import { Injectable } from '@nestjs/common';
import { GetLikeSentenceResponse } from '../dto/get-like-sentence.dto';
import { PostgresGetLikeSentenceRepository } from '../repositories/get-like-sentence/postgres';


@Injectable()
export class GetLikeSentenceService {
    constructor(
        private readonly postgresGetLikeSentence: PostgresGetLikeSentenceRepository,
    ) {}

    // すべてのいいね情報を一度に取得
    async getLikeSentence( userId: string ): Promise<GetLikeSentenceResponse[] | null> {

        // いいねした文章情報の取得
        const getLikeSentences = await this.postgresGetLikeSentence.getLikeSentence(userId);

        const likeSentences = getLikeSentences.map((likeSentence) => {
            return {
                ...likeSentence,
                novel: {
                    ...likeSentence.novel,
                    categories: likeSentence.novel.categories.map(cat => cat.categoryName),
                }
            };
        });

        return likeSentences;
    }
}