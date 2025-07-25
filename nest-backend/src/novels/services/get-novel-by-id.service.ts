import { Injectable } from '@nestjs/common';
import { Error } from 'mongoose';
import { PostgresGetNovelByIdRepository } from '../repositories/get-novel-by-id/postgres';
import { MongoGetNovelByIdRepository } from '../repositories/get-novel-by-id/mongo';
import { GetNovelByIdResponse } from '../dto/request/get-novel-by-id.dto';

@Injectable()
export class GetNovelsByIdService {
  constructor(
    private readonly postgresGetNovelById: PostgresGetNovelByIdRepository,
    private readonly mongoGetNovelById: MongoGetNovelByIdRepository,
  ) {}

  //id指定で取得
  async getNovelById(novelId: string, userId?: string): Promise<GetNovelByIdResponse> {
    const psqlNovel = await this.postgresGetNovelById.findNovelById(novelId, userId);
    if (!psqlNovel) throw new Error('該当する小説がありません');

    //小説内容の取得
    const mongoNovel = await this.mongoGetNovelById.findBySharedId(
      psqlNovel.sharedId,
    );
    if (!mongoNovel) throw new Error('該当する小説内容がありません');

    return {
      ...psqlNovel,
      content: mongoNovel.content ?? '',
      overview: mongoNovel.overview ?? '',
    };
  }
}
