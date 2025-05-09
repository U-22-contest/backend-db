import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Comment as PrismaComment } from '../../../../generated/postgresql';

@Injectable()
export class PostgresDeleteCommentRepository {
    constructor(private readonly prisma: PrismaService,) {}

    async findComentById(id:string) : Promise<PrismaComment | null> {
        return this.prisma.comment.findUnique({
            where: { id }
        });
    }

    async deleteCommentById(id: string) : Promise<void> {
        await this.prisma.comment.delete({ where: { id } });
    }
}