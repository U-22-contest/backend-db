export class GetLikeCommentResponse {
  id: string;
  userId: string;
  commentId: string;
  createdAt: Date;
  comment: {
    id: string,
    startIndex: number,
    endIndex: number,
    createdAt: Date,
    updatedAt: Date,
    user: {
      username: string,
      profileImagePath: string | null,
    } | null,
    novel: {
      id: string,
      title: string,
      coverImagePath: string | null,
    } | null,
    _count: {
      likesComment: number,
    }
  }
}