import {
    Controller,
    Post,
    Delete,
    Body,
    Param,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';

import { RemoveLikeDto } from './dto/remove-like-novel.dto';
import { LikeNovelDto } from './dto/like-novel.dto'

import { LikeNovelService, LikeNovelResponse } from './services/like-novel.service';
import { RemoveLikeNovelService } from './services/remove-like-novel.service';

@Controller('likes')
export class LikeController {
    constructor(
        private readonly removeLikeNovelService: RemoveLikeNovelService,
        private readonly likeNovelService: LikeNovelService,
    ) {}

    // 小説全体にいいね
    @Post('novel')
    @UseGuards(AuthGuard('jwt'))
    async likeNovel(
        @Body() likeNovelDto: LikeNovelDto,
        @Request() req: { user: JWTPayload },
    ): Promise<LikeNovelResponse> {
        likeNovelDto.userId = req.user.userId
        return this.likeNovelService.likeNovel(likeNovelDto);
    }

    // いいね削除（汎用）
    @Delete('novel')
    @UseGuards(AuthGuard('jwt'))
    async removeLike(
        @Body() removeLikeDto: RemoveLikeDto,
        @Request() req: { user: JWTPayload },
    ): Promise<{ message: string }> {
        removeLikeDto.userId = req.user.userId;
        return this.removeLikeNovelService.removeLikeNovel(removeLikeDto);
    }

}