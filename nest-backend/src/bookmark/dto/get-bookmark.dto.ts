import { ApiProperty } from "@nestjs/swagger";

export class AuthorInfo {
  @ApiProperty()
  username: string;

  @ApiProperty({
    nullable: true,
    type: String,
  })
  profileImagePath: string | null;
}

export class CountInfo {
  @ApiProperty()
  likes: number;

  @ApiProperty()
  bookmark: number;

  @ApiProperty()
  viewHistory: number;
}

export class NovelInfo {
  @ApiProperty()
  id: string;

  @ApiProperty()
  sharedId: string;

  @ApiProperty({
    nullable: true,
    type: String,
  })
  coverImagePath: string | null;

  @ApiProperty()
  categories: string[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({
    nullable: true,
    type: AuthorInfo,
  })
  author: AuthorInfo | null;

  @ApiProperty()
  _count: CountInfo;

  @ApiProperty()
  overview: string;
}

export class UserBookmarkResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  novelId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  novel: NovelInfo;
}