import { ApiProperty } from "@nestjs/swagger";

export class GetLikeUsersByNovelResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty({
    nullable: true,
    type: String,
  })
  profileImagePath: string | null;

  @ApiProperty()
  createdAt: Date;
}