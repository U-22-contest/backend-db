import { ApiProperty } from "@nestjs/swagger";

export class GetFolloweesResponse {
    @ApiProperty()
    id: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    followingSince: Date;
}