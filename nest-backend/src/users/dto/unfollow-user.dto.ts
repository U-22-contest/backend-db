import { ApiProperty } from "@nestjs/swagger";

export class UnfollowUserDto {
    @ApiProperty()
    followerId: string;

    @ApiProperty()
    followeeId: string;
}