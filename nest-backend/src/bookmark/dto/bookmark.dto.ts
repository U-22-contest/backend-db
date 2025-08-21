import { IsString, IsNotEmpty } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class BookmarkDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  novelId: string;
}

export class BookmarkResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  novelId: string;

  @ApiProperty()
  createdAt: Date;
}