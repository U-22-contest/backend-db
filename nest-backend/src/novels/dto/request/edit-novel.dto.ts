import { IsArray, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import {ApiProperty} from "@nestjs/swagger";

export class EditNovelsDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  overview?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  categories?: string[];

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  coverImagePath?: string | null;
}

export class EditNovelsResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  sharedId: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ nullable: true })
  authorId: string | null;

  @ApiProperty({ nullable: true })
  coverImagePath: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  overview: string | undefined;

  @ApiProperty()
  content: string | undefined;
}