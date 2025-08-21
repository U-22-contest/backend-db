import { ApiProperty } from "@nestjs/swagger";

class UserInfo {
  @ApiProperty()
  username: string;

  @ApiProperty({
    nullable: true,
    type: String,
  })
  profileImagePath: string | null;
}

class NovelInfo {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ nullable: true })
  coverImagePath: string | null;
}

class CountInfo {
  @ApiProperty()
  likesComment: number;
}

class CommentInfo {
  @ApiProperty()
  id: string;

  @ApiProperty()
  startIndex: number;

  @ApiProperty()
  endIndex: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({
    nullable: true,
    type: UserInfo,
  })
  user: UserInfo | null;

  @ApiProperty({
    nullable: true,
    type: NovelInfo,
  })
  novel: NovelInfo | null;

  @ApiProperty()
  _count: CountInfo;
}

export class GetLikeCommentResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  commentId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  comment: CommentInfo;
}