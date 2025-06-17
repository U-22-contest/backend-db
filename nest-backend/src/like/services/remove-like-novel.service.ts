import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PostgresRemoveLikeNovelRepository } from '../repositories/remove-like-novel/postgres';
import { RemoveLikeDto } from '../dto/remove-like-novel.dto'

@Injectable()
export class RemoveLikeNovelService {
    constructor(
        private readonly postgresRemoveLikeNovel: PostgresRemoveLikeNovelRepository,
    ) {}

    // いいねを削除
    async removeLikeNovel({userId, novelId} : RemoveLikeDto) {

        const existingLike = await this.postgresRemoveLikeNovel.findLikeNovelRelation(userId, novelId);
        if (!existingLike) throw new NotFoundException('Like not found');

        await this.postgresRemoveLikeNovel.deleteLikeNovel(existingLike.id);

        return { message: 'Like removed successfully' };
    }
}