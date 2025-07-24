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

    // titleとcategories、coverImagePathの編集
    const updatedPostgresNovel = ( editDto.title || editDto.categories || editDto.coverImagePath )
      ? await this.postgresEditNovel.updateNovel(id, editDto)
      : novel;

    // contentとoverviewの編集
    const updatedMongoNovel = (editDto.content || editDto.overview)
      ? await this.mongoEditNovel.updateContentBySharedId(novel.sharedId, editDto)
      : await this.mongoGetNovelById.findBySharedId(novel.sharedId)


    // TODO: 編集した内容を返す必要あり
    // → 小説全体を返す。
    return {
      ...updatedPostgresNovel,
      overview: updatedMongoNovel?.overview,
      content: updatedMongoNovel?.content,
    };
  }
}
