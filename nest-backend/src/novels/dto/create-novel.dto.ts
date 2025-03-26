// import { IsString, MaxLength } from 'class-validator';

export class CreateNovelDto {
  authorId: string;
  title: string;
  content: string;
}
