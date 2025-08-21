import { ApiProperty } from "@nestjs/swagger";

class AuthorInfo {
    @ApiProperty()
    id: string;

    @ApiProperty()
    username: string;

    @ApiProperty({ nullable: true })
    profileImagePath: string | null;
}

class CountInfo {
    @ApiProperty()
    likes: number;

    @ApiProperty()
    bookmark: number;

    @ApiProperty()
    viewHistory: number;
}

export class GetNovelByIdResponse {
    @ApiProperty()
    id: string;

    @ApiProperty()
    sharedId: string;

    @ApiProperty()
    title: string;

    @ApiProperty({ nullable: true})
    coverImagePath: string | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty({
        type: AuthorInfo,
        nullable: true,
    })
    author: AuthorInfo | null;

    @ApiProperty()
    _count: CountInfo;

    @ApiProperty()
    overview: string;

    @ApiProperty()
    content: string;
}