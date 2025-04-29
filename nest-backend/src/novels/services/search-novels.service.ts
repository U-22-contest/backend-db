import { Injectable } from '@nestjs/common';
import { SearchNovelRepository } from '../repositories/mongo-search-novels.repositories';
import { Novel } from '../types/novel.types';
import { PostgresNovelRepository } from '../repositories/postgres-search-novels.repositories';

@Injectable()
export class SearchNovelsService {
  constructor(
    private readonly novelRepository: SearchNovelRepository,
    private readonly postgresNovelRepository: PostgresNovelRepository,
  ) {}

  async searchNovel(keyword: string): Promise<{ novels: Novel[] }> {
    const mongoNovels = await this.novelRepository.searchByKeyword(keyword);

    const novels: Novel[] = [];

    // 処理重い気がするので、後で改善する
    for (const mongoNovel of mongoNovels) {
      // PostgreSQLからshareIdを取得
      const authorId =
        await this.postgresNovelRepository.findAuthorIdBySharedId(
          mongoNovel.sharedId,
        );

      if (!authorId) {
        // PostgreSQLに該当する小説がない場合はスキップ
        continue;
      }
      novels.push({
        sharedId: mongoNovel.sharedId, // 共通
        authorId: authorId, // PostgreSQLから
        title: mongoNovel.title, // MongoDBから
      });
    }

    return { novels };
  }
}
