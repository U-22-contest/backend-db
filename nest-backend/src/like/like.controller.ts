import {
    Controller,
    Post,
    Delete,
    Body,
    Get,
    Param,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';

import { UserLikesResponse } from './dto/get-likes.dto'
import { LikeNovelDto } from './dto/like-novel.dto'
import { RemoveLikeDto } from './dto/remove-like-novel.dto';
import { LikeSentenceDto } from './dto/like-sentence.dto'
import { RemoveLikeSentenceDto } from './dto/remove-like-sentence.dto'

import { GetLikesService } from './services/get-likes.service'
import { LikeNovelService, LikeNovelResponse } from './services/like-novel.service';
import { RemoveLikeNovelService } from './services/remove-like-novel.service';
import { LikeSentenceService, LikeSentenceResponse } from './services/like-sentence.service';
import { RemoveLikeSentenceService } from './services/remove-like-sentence.service';

@Controller('likes')
export class LikeController {
    constructor(
        private readonly getLikesService: GetLikesService,
        private readonly likeNovelService: LikeNovelService,
        private readonly removeLikeNovelService: RemoveLikeNovelService,
        private readonly likeSentenceService: LikeSentenceService,
        private readonly removeLikeSentenceService: RemoveLikeSentenceService,
    ) {}


    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getAllUserLikes(
        @Request() req: { user: JWTPayload },
    ) : Promise<UserLikesResponse>  {
        const userId = req.user.userId;
        return this.getLikesService.getAllLikes(userId);
    }

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

    // 小説いいね削除
    @Delete('novel')
    @UseGuards(AuthGuard('jwt'))
    async removeLike(
        @Body() removeLikeDto: RemoveLikeDto,
        @Request() req: { user: JWTPayload },
    ): Promise<{ message: string }> {
        removeLikeDto.userId = req.user.userId;
        return this.removeLikeNovelService.removeLikeNovel(removeLikeDto);
    }

    // 文章にいいね
    @Post('sentence')
    @UseGuards(AuthGuard('jwt'))
    async likeSentence(
        @Body() likeSentenceDto: LikeSentenceDto,
        @Request() req: { user: JWTPayload },
    ): Promise<LikeSentenceResponse> {
        likeSentenceDto.userId = req.user.userId
        return this.likeSentenceService.likeSentence(likeSentenceDto);
    }

    // 文章いいね削除
    @Delete('sentence')
    @UseGuards(AuthGuard('jwt'))
    async removeLikeSentence(
        @Body() removeLikeSentenceDto: RemoveLikeSentenceDto,
        @Request() req: { user: JWTPayload },
    ): Promise<{ message: string }> {
        removeLikeSentenceDto.userId = req.user.userId;
        return this.removeLikeSentenceService.removeLikeSentence(removeLikeSentenceDto);
    }

}