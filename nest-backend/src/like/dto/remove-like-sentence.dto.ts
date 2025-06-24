import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

// いいね削除用DTO
export class RemoveLikeSentenceDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    novelId: string;

    @IsInt()
    @Min(0)
    startIndex: number;

    @IsInt()
    @Min(0)
    endIndex: number;
}

// 削除時は { message } が渡される。