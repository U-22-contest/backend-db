import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Follow, User } from '../../../../generated/postgresql';

@Injectable()
export class PostgresFollowUserRepository {
    constructor(private prisma: PrismaService) {}

    async findUserById(userId: string) : Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id: userId },
        });
    }

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

    async createFollow(followerId: string, followeeId: string): Promise<Follow> {
        return this.prisma.follow.create({
            data: {
                followerId,
                followeeId,
            },
        });
    }
}