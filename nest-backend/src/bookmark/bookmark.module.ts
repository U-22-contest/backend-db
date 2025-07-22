import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { BookmarkController } from './bookmark.controller';

import { GetBookmarkService } from "./services/get-bookmark.service";
import { BookmarkService } from "./services/bookmark.service";
import { RemoveBookmarkService } from './services/remove-bookmark.service';

import { PostgresGetBookmarkRepository } from "./repositories/get-bookmark/postgres";
import { PostgresBookmarkRepository } from "./repositories/bookmark/postgres";
import { PostgresRemoveBookmarkRepository } from "./repositories/remove-bookmark/postgres";

@Module({
  imports: [PrismaModule],
  controllers: [BookmarkController],
  providers: [
    GetBookmarkService,
    BookmarkService,
    RemoveBookmarkService,

    PostgresGetBookmarkRepository,
    PostgresBookmarkRepository,
    PostgresRemoveBookmarkRepository,
  ],
  exports: []
})
export class BookmarkModule {}
