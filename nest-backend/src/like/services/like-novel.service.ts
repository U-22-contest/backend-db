import {
    Injectable,
    ConflictException,
    NotFoundException,
} from '@nestjs/common';
import { PostgresLikeNovelRepository } from "../repositories/like-novel/postgres";
import { LikeNovelDto } from '../dto/like-novel.dto'

export interface LikeNovelResponse {
    id: string;
    userId: string;
    novelId: string;
    createdAt: Date;
}

@Injectable()
export class LikeNovelService {
    constructor(
        private readonly postgresLikeNovel: PostgresLikeNovelRepository,
    ) {}

    // 小説全体にいいね
    async likeNovel({ userId, novelId }: LikeNovelDto) : Promise<LikeNovelResponse> {

        // 小説が存在するかチェック
        const novel = await this.postgresLikeNovel.findNovelById(novelId);
        if (!novel) throw new NotFoundException('Novel not found');

        // すでにいいねしていないか
        const existingLike = await this.postgresLikeNovel.findLikeNovelRelation(userId, novelId);
        if (existingLike) throw new ConflictException('You have already liked this novel');

        const like = await this.postgresLikeNovel.createLikeNovel(userId, novelId);

        return like;

    }
}