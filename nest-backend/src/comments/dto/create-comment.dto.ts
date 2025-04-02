export class CreateCommentDto {
  userId: string;
  novelId: string;
  comment: string;
  startIndex: number;
  endIndex: number;
}
