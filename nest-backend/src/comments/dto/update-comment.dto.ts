 import { IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  comment: string;
}

export class UpdateCommentResponse {
  id: string;
  sharedId: string;
  userId: string | null
  novelId: string
  startIndex: number
  endIndex: number
  createdAt: Date;
  updatedAt: Date;
  comment: string | undefined;
}