import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

// いいね削除用DTO
export class RemoveLikeCommentDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  commentId: string;
}

// 削除時は { message } が渡される。