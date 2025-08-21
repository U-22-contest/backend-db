import {ApiProperty} from "@nestjs/swagger";

export class CreateCommentDto {
  userId: string;
  novelId: string;

  @ApiProperty()
  comment: string;

  @ApiProperty()
  startIndex: number;

  @ApiProperty()
  endIndex: number;
}
