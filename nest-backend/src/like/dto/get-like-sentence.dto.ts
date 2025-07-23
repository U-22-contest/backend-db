export class GetLikeSentenceResponse {
  id: string;
  userId: string;
  novelId: string;
  startIndex: number;
  endIndex: number;
  createdAt: Date;
  novel: {
    id: string;
    sharedId: string;
    coverImagePath: string | null;
    categories: string[];
    createdAt: Date;
    updatedAt: Date;
    author: {
        username: string;
        profileImagePath: string | null;
    } | null;
    _count: {
        likes: number;
        bookmark: number;
        viewHistory: number;
    };
  };
}