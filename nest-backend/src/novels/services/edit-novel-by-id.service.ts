import { Injectable } from '@nestjs/common';
import { EditNovelsDto } from '../dto/request/edit-novel.dto';
import { postgresEditNovelRepository } from '../repositories/edit-novel-by-id/postgres';
import { MongoEditNovelRepository } from '../repositories/edit-novel-by-id/mongo';

@Injectable()
export class EditNovelService {
  constructor(
    private readonly postgresEditNovel: postgresEditNovelRepository,
    private readonly mongoEditNovel: MongoEditNovelRepository,
  ) {}

  async editNovelById(
    id: string,
    userId: string,
    editDto: EditNovelsDto,
    // returnする型は編集した結果を返すべき
  ): Promise<{ message: string }> {
    const novel = await this.postgresEditNovel.findByAuthor(id, userId);
    if (!novel) {
      throw new Error('該当小説がありません');
    }

    // titleとcategoriesの編集
    if ( editDto.title || editDto.categories || editDto.coverImagePath ) {
      await this.postgresEditNovel.updateNovel(id, editDto)
    }

    // contentの編集
    if (editDto.content || editDto.overview) {
      await this.mongoEditNovel.updateContentBySharedId(
        novel.sharedId,
        editDto,
      );
    }

    // TODO: 編集した内容を返す必要あり
    // 全部返す？それとも変更した箇所だけ？
    return {
      message: '小説を更新しました',
    };
  }
}
