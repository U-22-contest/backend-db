import {
    Injectable,
    ConflictException,
    NotFoundException,
} from '@nestjs/common';
import { PostgresLikeSentenceRepository } from "../repositories/like-sentence/postgres";
import { LikeSentenceDto, LikeSentenceResponse } from "../dto/like-sentence.dto";


@Injectable()
export class LikeSentenceService {
    constructor(
        private readonly postgresLikeSentence: PostgresLikeSentenceRepository,
    ) {}

    // 小説全体にいいね
    async likeSentence({ userId, novelId, startIndex, endIndex }: LikeSentenceDto) : Promise<LikeSentenceResponse> {

        // 小説が存在するかチェック
        const novel = await this.postgresLikeSentence.findNovelById(novelId);
        if (!novel) throw new NotFoundException('Novel not found');

        // すでにいいねしていないか
        const existingLike = await this.postgresLikeSentence.findLikeSentenceRelation(userId, novelId, startIndex, endIndex);
        if (existingLike) throw new ConflictException('You have already liked this novel');

        const likeSentenceResponse = await this.postgresLikeSentence.createLikeSentence(userId, novelId, startIndex, endIndex);

        return likeSentenceResponse;

    }
}