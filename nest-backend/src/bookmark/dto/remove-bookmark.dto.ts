import { IsString, IsNotEmpty } from 'class-validator';

// bookmark削除用DTO
export class RemoveBookmarkDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    novelId: string;
}

// 削除時は { message } が渡される。