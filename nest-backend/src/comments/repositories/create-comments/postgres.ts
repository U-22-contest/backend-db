import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Comment as PrismaComment } from '../../../../generated/postgresql';

@Injectable()
export class PostgresCreateCommentRepository {
    constructor(private readonly prisma: PrismaService,) {}

    async createComment(
        sharedId: string,
        userId: string,
        novelId: string,
        startIndex: number,
        endIndex: number,
    ) : Promise<PrismaComment> {
        return this.prisma.comment.create({
            data: {
                sharedId,
                userId,
                novelId,
                startIndex,
                endIndex,
            }
        });
    }
}