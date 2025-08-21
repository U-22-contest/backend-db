import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class LikeSentenceDto {
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

export class LikeSentenceResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  novelId: string;

  @ApiProperty()
  createdAt: Date;
}
