import { IsOptional, IsString, IsArray } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateNovelDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  overview: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categoryNames?: string[];

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  coverImagePath?: string | null;
}
