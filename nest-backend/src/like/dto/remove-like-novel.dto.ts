import { IsString, IsNotEmpty } from 'class-validator';

// いいね削除用DTO
export class RemoveLikeDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    novelId: string;
}

// 削除時は { message } が渡される。