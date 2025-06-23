import {IsString, IsNotEmpty, IsInt, Min} from 'class-validator';

export class LikeSentenceDto {
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
