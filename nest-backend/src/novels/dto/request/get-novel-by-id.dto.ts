
export type GetNovelByIdResponse = {
    id: string;
    sharedId: string;
    title: string;
    authorId: string;
    coverImagePath: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: {
        viewHistory: number;
        likes: number;
    }
    overview: string;
    content: string;
};