import {ApiProperty} from "@nestjs/swagger";

export class FollowUserDto {
    @ApiProperty()
    followerId: string;

    @ApiProperty()
    followeeId: string;
}

export class FollowUserResponse {
    @ApiProperty()
    id: string;

    @ApiProperty()
    followerId: string;

    @ApiProperty()
    followeeId: string;

    @ApiProperty()
    createdAt: Date;
}