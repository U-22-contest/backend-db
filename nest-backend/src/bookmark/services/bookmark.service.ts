import {
    Injectable,
    ConflictException,
    NotFoundException,
} from '@nestjs/common';
import { PostgresBookmarkRepository } from "../repositories/bookmark/postgres";
import { BookmarkDto, BookmarkResponse } from '../dto/bookmark.dto'

@Injectable()
export class BookmarkService {
    constructor(
        private readonly postgresBookmark: PostgresBookmarkRepository,
    ) {}

    // 小説全体にいいね
    async bookmark({ userId, novelId }: BookmarkDto) : Promise<BookmarkResponse> {

        // 小説が存在するかチェック
        const novel = await this.postgresBookmark.findNovelById(novelId);
        if (!novel) throw new NotFoundException('Novel not found');

        // すでにbookmarkしていないか
        const existingBookmark = await this.postgresBookmark.findBookmarkRelation(userId, novelId);
        if (existingBookmark) throw new ConflictException('You have already bookmarked this novel');

        const bookmarkResponse = await this.postgresBookmark.createBookmark(userId, novelId);

        return bookmarkResponse;
    }
}