import { Injectable } from '@nestjs/common';
import { PostgresGetFollowersRepository } from '../repositories/get-followers/postgres';

export type GetFollowersResponse = {
    id: string,
    username: string,
    followingSince: Date,
};

@Injectable()
export class GetFollowersService {
    constructor(
        private readonly postgresGetFollowers : PostgresGetFollowersRepository,
    ) {}

    async getFollowers(userid: string) : Promise<GetFollowersResponse[]> {
        const follows = await this.postgresGetFollowers.findFollowersByUserId(userid);

        return follows.map(follow => ({
            id: follow.follower.id,
            username: follow.follower.username,
            followingSince: follow.createdAt
        }));

    }
}
