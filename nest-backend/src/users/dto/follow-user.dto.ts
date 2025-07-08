export class FollowUserDto {
    followerId: string;
    followeeId: string;
}

export class FollowUserResponse {
    id: string;
    followerId: string;
    followeeId: string;
    createdAt: Date;
}