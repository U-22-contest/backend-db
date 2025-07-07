import { IsArray, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class SearchNovelsDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  categories?: string[];
}
