export class LikeNovelResponse {
    id: string;
    userId: string;
    novelId: string;
    createdAt: Date;
}

export class LikeSentenceResponse {
    id: string;
    userId: string;
    novelId: string;
    startIndex: number;
    endIndex: number;
    createdAt: Date;
}

export class UserLikesResponse {
    likeNovels: LikeNovelResponse[];
    likeSentences: LikeSentenceResponse[];
}