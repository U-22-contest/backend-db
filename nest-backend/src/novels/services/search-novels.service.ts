// import { Injectable } from '@nestjs/common';
// import { MongoSearchNovelRepository } from '../repositories/search-novels/mongo';
// import { Novel } from '../types/novel.types';
// import { PostgresNovelRepository } from '../repositories/search-novels/postgres';
//
// @Injectable()
// export class SearchNovelsService {
//   constructor(
//     private readonly novelRepository: MongoSearchNovelRepository,
//     private readonly postgresNovelRepository: PostgresNovelRepository,
//   ) {}
//
//   async searchNovel(keyword: string): Promise<{ novels: Novel[] }> {
//     const mongoNovels = await this.novelRepository.searchByKeyword(keyword);
//
//     const novels: Novel[] = [];
//
//     // 処理重い気がするので、後で改善する
//     for (const mongoNovel of mongoNovels) {
//       // PostgreSQLからshareIdを取得
//       const authorId =
//         await this.postgresNovelRepository.findAuthorIdBySharedId(
//           mongoNovel.sharedId,
//         );
//
//       if (!authorId) {
//         // PostgreSQLに該当する小説がない場合はスキップ
//         continue;
//       }
//       novels.push({
//         sharedId: mongoNovel.sharedId, // 共通
//         authorId: authorId, // PostgreSQLから
//         title: mongoNovel.title, // MongoDBから
//       });
//     }
//
//     return { novels };
//   }
// }

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