
export type GetNovelByIdResponse = {
    id: string;
    sharedId: string;
    title: string;
    coverImagePath: string | null;
    createdAt: Date;
    updatedAt: Date;
    author: {
        id: string;
        username: string;
        profileImagePath: string | null;
    } | null;
    _count: {
        viewHistory: number;
        likes: number;
    }
    overview: string;
    content: string;
};