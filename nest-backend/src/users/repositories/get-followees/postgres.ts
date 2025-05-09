import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

type GetFolloweeResponse = {
    id: string;
    followerId: string;
    followeeId: string;
    createdAt: Date;
    followee: {
        id: string;
        username: string;
    };
};

@Injectable()
export class PostgresGetFolloweesRepository {
    constructor(private prisma: PrismaService) {}

    async findFolloweesByUserId(userid: string) : Promise<GetFolloweeResponse[]> {
        return this.prisma.follow.findMany({
            where: { followerId: userid },
            include: {
                followee: {
                    select: {
                        id: true,
                        username: true,
                    },
                },
            },
        });
    }
}