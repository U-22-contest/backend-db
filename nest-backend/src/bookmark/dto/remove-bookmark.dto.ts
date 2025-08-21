import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

// bookmark削除用DTO
export class RemoveBookmarkDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  novelId: string;
}

// 削除時は { message } が渡される。