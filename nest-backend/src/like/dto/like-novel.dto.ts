import { IsString, IsNotEmpty } from 'class-validator';

export class LikeNovelDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    novelId: string;
}
