import { IsOptional, IsString, IsArray } from 'class-validator';

export class CreateNovelDto {
  // authorId: string;
  title: string;
  content: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categoryNames?: string[];

  @IsOptional()
  @IsString()
  coverImagePath?: string | null;
}
