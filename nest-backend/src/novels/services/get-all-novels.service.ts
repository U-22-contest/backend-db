import { Injectable } from '@nestjs/common';
import { Error } from 'mongoose';
import { PostgresGetAllNovelRepository } from '../repositories/get-all-novels/postgres';
import { MongoGetAllNovelRepository } from '../repositories/get-all-novels/mongo';
import { GetPreviewByIdService } from './get-preview-by-id.service';

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

    private readonly getPreviewByIdService: GetPreviewByIdService,
  ) {}

  //全小説の取得
  async getAllNovel(): Promise<GetAllNovelsResponse[]> {
    const psqlNovels = await this.postgresGetAllNovel.findAllNovel();
    if (!psqlNovels) throw new Error('小説が投稿されていません');

    // ----------------------------------------
    // 内容をすべて取得
    // const mongoNovels = await this.mongoGetAllNovel.findAllNovel();
    // ----------------------------------------
    // sharedIdを使用してPreviewを取得
    const mongoNovels = await Promise.all(
        psqlNovels.map((novel) =>
            this.getPreviewByIdService.getPreviewById(novel.sharedId)
        )
    );
    // ----------------------------------------

    // MongoDBのデータをMapに変換（sharedIdをキーにする）
    const mongoMap = new Map(
        mongoNovels.map((novel) => [novel.sharedId, novel])
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
