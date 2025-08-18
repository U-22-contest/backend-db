import { Injectable } from '@nestjs/common';
import { EditNovelsDto, EditNovelsResponse } from '../dto/request/edit-novel.dto';
import { postgresEditNovelRepository } from '../repositories/edit-novel-by-id/postgres';
import { MongoEditNovelRepository } from '../repositories/edit-novel-by-id/mongo';
import { PostgresGetNovelByIdRepository } from '../repositories/get-novel-by-id/postgres';
import { MongoGetNovelByIdRepository } from '../repositories/get-novel-by-id/mongo';

@Injectable()
export class EditNovelService {
  constructor(
    private readonly postgresEditNovel: postgresEditNovelRepository,
    private readonly mongoEditNovel: MongoEditNovelRepository,
    private readonly postgresGetNovelById: PostgresGetNovelByIdRepository,
    private readonly mongoGetNovelById: MongoGetNovelByIdRepository,
  ) {}

  async editNovelById(
    id: string,
    userId: string,
    editDto: EditNovelsDto,
    // returnする型は編集した結果を返すべき
  ): Promise<EditNovelsResponse> {
    const novel = await this.postgresEditNovel.findByAuthor(id, userId);
    if (!novel) {
      throw new Error('該当小説がありません');
    }

    // 更新対象を明確に定義
    const hasPostgresUpdates = !!(editDto.title || editDto.categories || editDto.coverImagePath);
    const hasMongoUpdates = !!(editDto.content || editDto.overview);

    // titleとcategories、coverImagePathの編集
    const updatedPostgresNovel = hasPostgresUpdates
      ? await this.postgresEditNovel.updateNovel(id, editDto)
      : novel;


    let updatedMongoNovel;
    if (hasMongoUpdates) {
      updatedMongoNovel = await this.mongoEditNovel.updateContentBySharedId(novel.sharedId, editDto);

      // Postgresの更新日時を更新・取得
      if (!hasPostgresUpdates) {
        const timestampUpdatedNovel = await this.postgresEditNovel.updateTimestamp(id);
        return {
          ...timestampUpdatedNovel,
          overview: updatedMongoNovel?.overview,
          content: updatedMongoNovel?.content,
        };
      }
    } else {
      updatedMongoNovel = await this.mongoGetNovelById.findBySharedId(novel.sharedId);
    }

    // TODO: 編集した内容を返す必要あり
    // → 小説全体を返す。
    return {
      ...updatedPostgresNovel,
      overview: updatedMongoNovel?.overview,
      content: updatedMongoNovel?.content,
    };
  }
}
