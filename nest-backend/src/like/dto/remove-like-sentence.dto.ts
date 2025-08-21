import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

// いいね削除用DTO
export class RemoveLikeSentenceDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  novelId: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  startIndex: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  endIndex: number;
}

// 削除時は { message } が渡される。