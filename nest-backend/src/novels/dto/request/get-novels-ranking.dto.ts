import { IsEnum, IsOptional, IsNumber, IsString } from 'class-validator';

export enum RankingPeriod {
    WEEKLY = 'weekly',
    MONTHLY = 'monthly',
    ALL_TIME = 'all_time',
}

export class GetNovelRankingDto {
    @IsEnum(RankingPeriod)
    period: RankingPeriod = RankingPeriod.ALL_TIME;

    @IsOptional()
    @IsString()
    categoryName?: string;

    @IsOptional()
    @IsNumber()
    limit?: number;

    @IsOptional()
    @IsNumber()
    offset?: number;
}

export type GetNovelRankingResponse = {
    rank: number;
    id: string;
    sharedId: string;
    title: string;
    coverImagePath: string | null;
    createdAt: Date;
    updatedAt: Date;
    author: {
        id: string;
        username: string;
        profileImagePath: string | null;
    } | null;
    categories: {
        categoryName: string;
    }[];
    _count: {
        likes: number;
        bookmark: number;
    }
};