import { IsArray, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class EditNovelsDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  overview?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  categories?: string[];

  @IsOptional()
  @IsString()
  coverImagePath?: string | null;
}

export class EditNovelsResponse {
  id: string;
  sharedId: string;
  title: string;
  authorId: string | null;
  coverImagePath: string | null;
  createdAt: Date;
  updatedAt: Date;
  overview: string | undefined;
  content: string | undefined;
}