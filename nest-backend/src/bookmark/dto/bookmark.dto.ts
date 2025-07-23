import { IsString, IsNotEmpty } from 'class-validator';

export class BookmarkDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    novelId: string;
}

export class BookmarkResponse {
    id: string;
    userId: string;
    novelId: string;
    createdAt: Date;
}