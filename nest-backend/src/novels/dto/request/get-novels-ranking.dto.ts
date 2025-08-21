import { IsEnum, IsOptional, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum RankingPeriod {
    WEEKLY = 'weekly',
    MONTHLY = 'monthly',
    ALL_TIME = 'all_time',
}

export class GetNovelRankingDto {
    @ApiProperty()
    @IsEnum(RankingPeriod)
    period: RankingPeriod = RankingPeriod.ALL_TIME;

    @ApiProperty()
    @IsOptional()
    @IsString()
    categoryName?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    limit?: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    offset?: number;
}

class AuthorInfo {
    @ApiProperty()
    id: string;

    @ApiProperty()
    username: string;

    @ApiProperty({ nullable: true })
    profileImagePath: string | null;
}

class CategoryInfo {
    @ApiProperty()
    categoryName: string;
}

class CountInfo {
    @ApiProperty()
    likes: number;

    @ApiProperty()
    bookmark: number;
}

export class GetNovelRankingResponse {
    @ApiProperty()
    rank: number;

    @ApiProperty()
    id: string;

    @ApiProperty()
    sharedId: string;

    @ApiProperty()
    title: string;

    @ApiProperty({ nullable: true })
    coverImagePath: string | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty({
        type: AuthorInfo,
        nullable: true,
    })
    author: AuthorInfo | null;

    @ApiProperty()
    categories: CategoryInfo[];

    @ApiProperty()
    _count: CountInfo;
}