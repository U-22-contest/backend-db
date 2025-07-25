import { IsString, IsNotEmpty } from 'class-validator';

// いいね削除用DTO
export class RemoveLikeCommentDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    commentId: string;
}

// 削除時は { message } が渡される。