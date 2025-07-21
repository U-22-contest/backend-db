import { Injectable } from '@nestjs/common';
import { GetPreviewByIdService } from './get-preview-by-id.service';
import { GetNovelRankingDto, GetNovelRankingResponse } from "../dto/request/get-novels-ranking.dto";
import { PostgresGetNovelRankingRepository } from "../repositories/get-novel-ranking/postgres";

@Injectable()
export class GetNovelRankingService {
  constructor(
    private readonly postgresGetNovelRanking: PostgresGetNovelRankingRepository,
    private readonly getPreviewByIdService: GetPreviewByIdService,
  ) {}

  //全小説の取得
  async getNovelRanking(getNovelRankingDto: GetNovelRankingDto): Promise<GetNovelRankingResponse[]> {

    const { period, limit = 20, offset = 0, categoryName } = getNovelRankingDto

    const novels = await this.postgresGetNovelRanking.findNovelByLikeRanking(
      period,
      limit,
      offset,
      categoryName,
    );

    if (!novels?.length) return [];

    return novels.map((novel, index) => {
      return {
        rank: offset + index + 1,
        id: novel.id,
        sharedId: novel.sharedId,
        title: novel.title,
        coverImagePath: novel.coverImagePath,
        createdAt: novel.createdAt,
        updatedAt: novel.updatedAt,
        author: novel.author,
        categories: novel.categories,
        _count: novel._count,
      }
    })

  }
}
