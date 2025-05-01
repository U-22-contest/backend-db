import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Comment as PrismaComment } from '../../../../generated/postgresql';

@Injectable()
export class PostgresGetCommentsByNovelIdRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getCommentsByNovelId(novelId: string) : Promise<PrismaComment[]> {
        return this.prisma.comment.findMany({
            where: { novelId },
            orderBy: { createdAt: 'desc' },
        })
    }
}