import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

type GetFollowerResponse = {
    id: string;
    followerId: string;
    followeeId: string;
    createdAt: Date;
    follower: {
        id: string;
        username: string;
    };
};

@Injectable()
export class PostgresGetFollowersRepository {
    constructor(private prisma: PrismaService) {}

    async findFollowersByUserId(userid: string) : Promise<GetFollowerResponse[]> {
        return this.prisma.follow.findMany({
            where: { followeeId: userid },
            include: {
                follower: {
                    select: {
                        id: true,
                        username: true,
                    },
                },
            },
        });
    }
}