import {
    Injectable,
    NotFoundException,
    BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RemoveLikeDto } from '../dto/remove-like-novel.dto'

@Injectable()
export class RemoveLikeNovelService {
    constructor(private readonly prisma: PrismaService) {}

    // いいねを削除（汎用）
    async removeLikeNovel({userId, novelId} : RemoveLikeDto) {
        try {
            let like;
            // 小説全体またはコメントのいいねの場合
            like = await this.prisma.likeNovel.deleteMany({
                where: {
                    userId,
                    novelId,
                },
            });

            if (like.count === 0) throw new NotFoundException('Like not found');

            return { message: 'Like removed successfully' };

        } catch (error) {
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw error;
        }
    }
}