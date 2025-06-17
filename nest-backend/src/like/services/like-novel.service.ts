import {
    Injectable,
    ConflictException,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { LikeNovelDto } from '../dto/like-novel.dto'

export interface LikeNovelResponse {
    id: string;
    userId: string;
    novelId: string;
    createdAt: Date;
}

@Injectable()
export class LikeNovelService {
    constructor(private readonly prisma: PrismaService) {}

    // 小説全体にいいね
    async likeNovel({ userId, novelId }: LikeNovelDto) : Promise<LikeNovelResponse> {
        try {
            // 小説が存在するかチェック
            const novel = await this.prisma.novel.findUnique({
                where: { id: novelId },
            });
            if (!novel) throw new NotFoundException('Novel not found');

            const existingLike = await this.prisma.likeNovel.findFirst({
                where: {
                    userId,
                    novelId,
                },
            });
            if (existingLike) throw new ConflictException('You have already liked this novel');

            const like = await this.prisma.likeNovel.create({
                data: {
                    userId,
                    novelId,
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            username: true,
                        },
                    },
                },
            });

            return like;

        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException('You have already liked this novel');
            }
            throw error;
        }
    }
}