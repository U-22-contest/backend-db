import { Injectable, NotFoundException } from '@nestjs/common';
import { PostgresUnfollowUserRepository } from '../repositories/unfollow-user/postgres';
import { UnfollowUserDto } from '../dto/unfollow-user.dto';

@Injectable()
export class UnfollowUserService {
    constructor(
        private readonly postgresUnfollowUser: PostgresUnfollowUserRepository,
    ) {}

    async unfollowUser(unfollowUserDto: UnfollowUserDto): Promise<{ message: string }> {
        const { followerId, followeeId } = unfollowUserDto;

        // フォロー関係が存在するか確認
        const follow = await this.postgresUnfollowUser.findFollowRelation(followerId, followeeId);
        if (!follow) throw new NotFoundException('このユーザーをフォローしていません');

        // フォロー関係を削除
        await this.postgresUnfollowUser.deleteFollow(follow.id)
        return { message: "フォロー解除成功" };
    }
}
