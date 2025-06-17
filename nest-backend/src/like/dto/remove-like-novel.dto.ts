import { IsString, IsNotEmpty, IsInt, Min, IsOptional, IsEnum } from 'class-validator';

// いいね削除用DTO
export class RemoveLikeDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    novelId: string;
}