import { Injectable } from '@nestjs/common';
import { MongoSearchNovelRepository } from '../repositories/search-novels/mongo';
import { Novel } from '../types/novel.types';
import { PostgresNovelRepository } from '../repositories/search-novels/postgres';

@Injectable()
export class SearchNovelsService {
  constructor(
    private readonly novelRepository: MongoSearchNovelRepository,
    private readonly postgresNovelRepository: PostgresNovelRepository,
  ) {}

  async searchNovel(title: string): Promise<{ novels: Novel[] }> {
    const mongoNovels = await this.novelRepository.searchByTitle(title);

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
