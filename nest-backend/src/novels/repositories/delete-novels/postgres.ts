import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Novel as PrismaNovel } from '../../../../generated/postgresql';

@Injectable()
export class PostgresDeleteNovelRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findNovelById(id: string): Promise<PrismaNovel | null> {
        return this.prisma.novel.findUnique({ where: { id } });
    }

    async deleteNovelById(id: string): Promise<void> {
        await this.prisma.novel.delete({ where: { id } });
    }
}