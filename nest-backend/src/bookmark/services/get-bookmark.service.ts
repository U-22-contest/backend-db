import { Injectable } from '@nestjs/common';
import { UserBookmarkResponse } from '../dto/get-bookmark.dto';
import { PostgresGetBookmarkRepository } from '../repositories/get-bookmark/postgres';


@Injectable()
export class GetBookmarkService {
    constructor(
        private readonly postgresGetBookmark: PostgresGetBookmarkRepository,
    ) {}

    // すべてのいいね情報を一度に取得
    async getBookmark( userId: string ): Promise<UserBookmarkResponse[] | null> {

        // いいねした小説情報の取得
        const getBookmarks = await this.postgresGetBookmark.getBookmarks(userId);

        return getBookmarks;
    }
}