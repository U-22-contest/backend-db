import { ApiProperty } from "@nestjs/swagger";

export class GetCommentsByNovelIdResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  sharedId: string;

  @ApiProperty({ nullable: true })
  userId: string | null;

  @ApiProperty()
  novelId: string;

  @ApiProperty()
  startIndex: number;

  @ApiProperty()
  endIndex: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  comment: string;
}