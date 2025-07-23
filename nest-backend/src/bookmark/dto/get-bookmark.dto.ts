export class UserBookmarkResponse {
  id: string;
  userId: string;
  novelId: string;
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
    overview: string;
  }
}