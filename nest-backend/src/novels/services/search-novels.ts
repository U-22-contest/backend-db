import { Injectable } from '@nestjs/common';
import { Novel } from '../types/novel.types';
import { PostgresNovelRepository } from '../repositories/search-novels/postgres';
import { SearchNovelsDto } from 'src/novels/dto/request/search-novels.dto';
import { MongoSearchNovelRepository } from '../repositories/search-novels/mongo';

@Injectable()
export class SearchNovelsService {
  constructor(
    private readonly postgresNovelRepository: PostgresNovelRepository,
    private readonly mongoNovelRepository: MongoSearchNovelRepository,
  ) {}

  async searchNovel(query: SearchNovelsDto): Promise<{ novels: Novel[] }> {
    // PostgreSQL から直接キーワード検索を行い、必要な情報を取得
    const novels = await this.postgresNovelRepository.searchByQuery(query);

    const novelWithPreview = await Promise.all(
      novels.map(async (novel) => {
        const preview = await this.mongoNovelRepository.getPreviewBySharedId(
          novel.sharedId,
        );
        return {
          ...novel,
          preview,
        };
      }),
    );
    return { novels: novelWithPreview };
  }
}
