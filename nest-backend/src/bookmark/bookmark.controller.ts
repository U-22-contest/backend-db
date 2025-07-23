import {
  Controller,
  Post,
  Delete,
  Body,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';

import { UserBookmarkResponse } from './dto/get-bookmark.dto'
import { BookmarkDto, BookmarkResponse } from './dto/bookmark.dto'
import { RemoveBookmarkDto } from './dto/remove-bookmark.dto';

import { GetBookmarkService } from './services/get-bookmark.service'
import { BookmarkService } from './services/bookmark.service';
import { RemoveBookmarkService } from './services/remove-bookmark.service';

@Controller('bookmark')
export class BookmarkController {
  constructor(
    private readonly getBookmarkService: GetBookmarkService,
    private readonly bookmarkService: BookmarkService,
    private readonly removeLikeNovelService: RemoveBookmarkService,
  ) {}


  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getBookmark(
    @Request() req: { user: JWTPayload },
  ) : Promise<UserBookmarkResponse[] | null>  {
    const userId = req.user.userId;
    return this.getBookmarkService.getBookmark(userId);
  }

  // 小説ブックマーク
  @Post('novel')
  @UseGuards(AuthGuard('jwt'))
  async bookmark(
    @Body() bookmarkDto: BookmarkDto,
    @Request() req: { user: JWTPayload },
  ): Promise<BookmarkResponse> {
    bookmarkDto.userId = req.user.userId
    return this.bookmarkService.bookmark(bookmarkDto);
  }

  // 小説ブックマーク削除
  @Delete('novel')
  @UseGuards(AuthGuard('jwt'))
  async removeBookmark(
    @Body() removeBookmarkDto: RemoveBookmarkDto,
    @Request() req: { user: JWTPayload },
  ): Promise<{ message: string }> {
    removeBookmarkDto.userId = req.user.userId;
    return this.removeLikeNovelService.removeBookmark(removeBookmarkDto);
  }

}