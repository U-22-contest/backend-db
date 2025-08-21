import {
  Controller,
  Post,
  Delete,
  Body,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
  ApiConsumes, ApiQuery,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';

import { UserBookmarkResponse } from './dto/get-bookmark.dto'
import { BookmarkDto, BookmarkResponse } from './dto/bookmark.dto'
import { RemoveBookmarkDto } from './dto/remove-bookmark.dto';

import { GetBookmarkService } from './services/get-bookmark.service'
import { BookmarkService } from './services/bookmark.service';
import { RemoveBookmarkService } from './services/remove-bookmark.service';

@ApiTags('Bookmark')
@Controller('bookmark')
export class BookmarkController {
  constructor(
    private readonly getBookmarkService: GetBookmarkService,
    private readonly bookmarkService: BookmarkService,
    private readonly removeLikeNovelService: RemoveBookmarkService,
  ) {}


  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'ブックマークした小説一覧取得' })
  @ApiResponse({
    status: 200, type: [UserBookmarkResponse]
  })
  async getBookmark(
    @Request() req: { user: JWTPayload },
  ) : Promise<UserBookmarkResponse[] | null>  {
    const userId = req.user.userId;
    return this.getBookmarkService.getBookmark(userId);
  }

  // 小説ブックマーク
  @Post('novel')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '小説ブックマーク追加' })
  @ApiResponse({
    status: 201, type: BookmarkResponse,
  })
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
  @ApiBearerAuth()
  @ApiOperation({ summary: 'ブックマーク削除' })
  @ApiResponse({
    status: 200, description: 'Bookmark removed successfully',
  })
  async removeBookmark(
    @Body() removeBookmarkDto: RemoveBookmarkDto,
    @Request() req: { user: JWTPayload },
  ): Promise<{ message: string }> {
    removeBookmarkDto.userId = req.user.userId;
    return this.removeLikeNovelService.removeBookmark(removeBookmarkDto);
  }

}