import { Injectable } from '@nestjs/common';
import { Novel } from '../types/novel.types';
import { PostgresNovelRepository } from '../repositories/search-novels/postgres';

@Injectable()
export class SearchNovelsService {
  constructor(
      private readonly postgresNovelRepository: PostgresNovelRepository,
  ) {}

  async searchNovel(keyword: string): Promise<{ novels: Novel[] }> {
    // PostgreSQL から直接キーワード検索を行い、必要な情報を取得
    const novels = await this.postgresNovelRepository.searchByKeyword(keyword);
    return { novels };
  }
}