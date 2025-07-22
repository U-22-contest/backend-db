import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PostgresRemoveBookmarkRepository } from '../repositories/remove-bookmark/postgres';
import { RemoveBookmarkDto } from '../dto/remove-bookmark.dto'

@Injectable()
export class RemoveBookmarkService {
    constructor(
        private readonly postgresRemoveBookmark: PostgresRemoveBookmarkRepository,
    ) {}

    // いいねを削除
    async removeBookmark({userId, novelId} : RemoveBookmarkDto): Promise<{ message }> {

        const existingBookmark = await this.postgresRemoveBookmark.findBookmarkRelation(userId, novelId);
        if (!existingBookmark) throw new NotFoundException('Like not found');

        await this.postgresRemoveBookmark.deleteBookmark(existingBookmark.id);

        return { message: 'Bookmark removed successfully' };
    }
}