import { IsString, IsNotEmpty } from 'class-validator';
// import { LikeNovel } from '../../../generated/postgresql';

export class LikeNovelDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    novelId: string;
}

export class LikeNovelResponse {
    id: string;
    userId: string;
    novelId: string;
    createdAt: Date;
}