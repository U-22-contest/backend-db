import { Injectable } from '@nestjs/common';
import { Error } from 'mongoose';
import { PostgresGetAllNovelRepository } from '../repositories/get-all-novels/postgres';
import { MongoGetAllNovelRepository } from '../repositories/get-all-novels/mongo';

export type GetAllNovelsResponse = {
  id: string;
  sharedId: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
};

@Injectable()
export class GetAllNovelsService {
  constructor(
    private readonly postgresGetAllNovel: PostgresGetAllNovelRepository,
    private readonly mongoGetAllNovel: MongoGetAllNovelRepository,
  ) {}

  //全小説の取得
  async getAllNovel(): Promise<GetAllNovelsResponse[]> {
    const psqlNovels = await this.postgresGetAllNovel.findAllNovel();
    if (!psqlNovels) throw new Error('小説が投稿されていません');

    const mongoNovels = await this.mongoGetAllNovel.findAllNovel();

    // MongoDBのデータをMapに変換（sharedIdをキーにする）
    const mongoMap = new Map(
      mongoNovels.map((novel) => [novel.sharedId, novel]),
    );

    // sharedIdをキーに結合
    const Novels = psqlNovels.map((psqlNovel) => {
      const mongo = mongoMap.get(psqlNovel.sharedId);
      return {
        ...psqlNovel,
        content: mongo?.content ?? '',
      };
    });

    return Novels;
  }
}
