import { IsString, IsNotEmpty } from 'class-validator';

export class LikeCommentDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    commentId: string;
}

export class LikeCommentResponse {
    id: string;
    userId: string;
    commentId: string;
    createdAt: Date;
}