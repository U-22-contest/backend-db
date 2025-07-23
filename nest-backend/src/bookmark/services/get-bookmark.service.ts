import { Injectable } from '@nestjs/common';
import { UserBookmarkResponse } from '../dto/get-bookmark.dto';
import { PostgresGetBookmarkRepository } from '../repositories/get-bookmark/postgres';
import { GetPreviewByIdService } from "../../novels/services/get-preview-by-id.service";


@Injectable()
export class GetBookmarkService {
  constructor(
    private readonly postgresGetBookmark: PostgresGetBookmarkRepository,
    private readonly getPreviewByIdService: GetPreviewByIdService,
  ) {}

  // すべてのいいね情報を一度に取得
  async getBookmark( userId: string ): Promise<UserBookmarkResponse[] | null> {

    // いいねした小説情報の取得
    const getBookmarks = await this.postgresGetBookmark.getBookmarks(userId);

    const BookmarkPreview = await Promise.all(
      getBookmarks.map((bookmark) =>
        this.getPreviewByIdService.getPreviewById(bookmark.novel.sharedId)
      )
    );

    // MongoDBのデータをMapに変換（sharedIdをキーにする）
    const mongoMap = new Map(
      BookmarkPreview.map((novel) => [novel.sharedId, novel]),
    );

    // sharedIdをキーに結合
    const bookmarks = getBookmarks.map((bookmark) => {
      const mongo = mongoMap.get(bookmark.novel.sharedId);
      return {
        ...bookmark,
        novel: {
          ...bookmark.novel,
          categories: bookmark.novel.categories.map(cat => cat.categoryName),
          overview: mongo?.overview ?? '',
          // content: mongo?.content ?? '',
        }
      };
    });

    return bookmarks;
  }
}