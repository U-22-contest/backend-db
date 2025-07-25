import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PostgresRemoveLikeCommentRepository } from '../repositories/remove-like-comment/postgres';
import { RemoveLikeCommentDto } from "../dto/remove-like-comment.dto";

@Injectable()
export class RemoveLikeCommentService {
    constructor(
        private readonly postgresRemoveLikeComment: PostgresRemoveLikeCommentRepository,
    ) {}

    // コメントいいねを削除
    async removeLikeComment({userId, commentId} : RemoveLikeCommentDto): Promise<{ message }> {

        const existingLike = await this.postgresRemoveLikeComment.findLikeCommentRelation(userId, commentId);
        if (!existingLike) throw new NotFoundException('LikeComment not found');

        await this.postgresRemoveLikeComment.deleteLikeComment(existingLike.id);

        return { message: 'Like comment removed successfully' };
    }
}