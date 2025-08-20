 import { IsString } from 'class-validator';
 import {ApiProperty} from "@nestjs/swagger";

export class UpdateCommentDto {
  @ApiProperty()
  @IsString()
  comment: string;
}

export class UpdateCommentResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  sharedId: string;

  @ApiProperty({ nullable: true })
  userId: string | null;

  @ApiProperty()
  novelId: string

  @ApiProperty()
  startIndex: number

  @ApiProperty()
  endIndex: number

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  comment: string | undefined;
}