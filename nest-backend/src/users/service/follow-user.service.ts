import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { FollowUserDto } from '../dto/follow-user.dto';
import { Follow } from '../../../generated/postgresql';
import { PostgresFollowUserRepository } from '../repositories/follow-user/postgres';

@Injectable()
export class FollowUserService {
    constructor(
        private readonly postgresFollowUser: PostgresFollowUserRepository,
    ) {}

    async followUser(followUserDto: FollowUserDto) : Promise<Follow> {
        const { followerId, followeeId } = followUserDto;

        // 自分自信をフォローできないよう
        if (followerId === followeeId) throw new ConflictException('自分自身をフォローすることはできません');

        const followee = await this.postgresFollowUser.findUserById(followeeId);
        if (!followee) throw new NotFoundException('フォロー対象のユーザーが見つかりません');

        // すでにフォローしているか確認
        const existingFollow = await this.postgresFollowUser.findFollowRelation(followerId, followeeId);
        if (existingFollow) throw new ConflictException('すでにこのユーザーをフォローしています');

        // フォロー関係を作成
        const follow = await this.postgresFollowUser.createFollow(followerId, followeeId);

        return {
            id: follow.id,
            followerId: follow.followerId,
            followeeId: follow.followeeId,
            createdAt: follow.createdAt,
        };
    };
}
