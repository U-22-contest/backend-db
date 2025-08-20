import { ApiProperty } from "@nestjs/swagger";

export class GetFollowersResponse {
    @ApiProperty()
    id: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    followingSince: Date;
}
