import { LikeNovel, LikeSentence } from '../../../generated/postgresql';

export class UserLikesResponse {
    likeNovels: LikeNovel[];
    likeSentences: LikeSentence[];
}