import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PostgresRemoveLikeSentenceRepository } from '../repositories/remove-like-sentence/postgres';
import { RemoveLikeSentenceDto } from '../dto/remove-like-sentence.dto'

@Injectable()
export class RemoveLikeSentenceService {
    constructor(
        private readonly postgresRemoveLikeSentence: PostgresRemoveLikeSentenceRepository,
    ) {}

    // いいねを削除
    async removeLikeSentence({userId, novelId, startIndex, endIndex} : RemoveLikeSentenceDto) {

        const existingLike = await this.postgresRemoveLikeSentence.findLikeSentenceRelation(
            userId,
            novelId,
            startIndex,
            endIndex,
        );
        if (!existingLike) throw new NotFoundException('LikeSentence not found');

        await this.postgresRemoveLikeSentence.deleteLikeSentence(existingLike.id);

        return { message: 'LikeSentence removed successfully' };
    }
}