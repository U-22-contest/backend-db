import { Injectable } from '@nestjs/common';
import { PostgresGetFolloweesRepository } from '../repositories/get-followees/postgres';
import { GetFolloweesResponse } from "../dto/get-followees.dto"

@Injectable()
export class GetFolloweesService {
    constructor(
        private readonly postgresGetFollowees: PostgresGetFolloweesRepository,
    ) {}

    async getFollowees(userid: string) : Promise<GetFolloweesResponse[]> {
        const follows = await this.postgresGetFollowees.findFolloweesByUserId(userid);

        return follows.map(follow => ({
            id: follow.followee.id,
            username: follow.followee.username,
            followingSince: follow.createdAt
        }));
    }

}
