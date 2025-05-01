import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Follow } from '../../../../generated/postgresql';

@Injectable()
export class PostgresUnfollowUserRepository {
    constructor(private prisma: PrismaService) {}

    async findFollowRelation(followerId: string, followeeId: string) : Promise<Follow | null> {
        return this.prisma.follow.findUnique({
            where: {
                followerId_followeeId: {
                    followerId,
                    followeeId,
                },
            },
        });
    }

    async deleteFollow(id: string): Promise<void> {
        await this.prisma.follow.delete({where: { id }});
    }
}