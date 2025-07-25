import {
    Injectable,
    ConflictException,
    NotFoundException,
} from '@nestjs/common';
import { PostgresLikeCommentRepository } from "../repositories/like-comment/postgres";
import { LikeCommentDto, LikeCommentResponse } from '../dto/like-comment.dto'

@Injectable()
export class LikeCommentService {
    constructor(
        private readonly postgresLikeComment: PostgresLikeCommentRepository,
    ) {}

    // 小説全体にいいね
    async likeComment({ userId, commentId }: LikeCommentDto) : Promise<LikeCommentResponse> {

        // 小説が存在するかチェック
        const comment = await this.postgresLikeComment.findCommentById(commentId);
        if (!comment) throw new NotFoundException('Novel not found');

        // すでにいいねしていないか
        const existingLike = await this.postgresLikeComment.findLikeCommentRelation(userId, commentId);
        if (existingLike) throw new ConflictException('You have already liked this comment');

        const likeNovelResponse = await this.postgresLikeComment.createLikeComment(userId, commentId);

        return likeNovelResponse;

    }
}