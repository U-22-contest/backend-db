import {
  Controller,
  Post,
  Delete,
  Body,
  Get,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';

import { GetLikeNovelResponse } from './dto/get-like-novels.dto';
import { GetLikeCommentResponse } from './dto/get-like-comments.dto';
import { GetLikeSentenceResponse } from './dto/get-like-sentence.dto';
import { GetLikeUsersByNovelResponse } from './dto/get-like-users-by-novel.dto';
import { LikeNovelDto, LikeNovelResponse } from './dto/like-novel.dto';
import { RemoveLikeDto } from './dto/remove-like-novel.dto';
import { LikeSentenceDto, LikeSentenceResponse } from './dto/like-sentence.dto';
import { RemoveLikeSentenceDto } from './dto/remove-like-sentence.dto';
import { LikeCommentDto, LikeCommentResponse } from './dto/like-comment.dto';
import { RemoveLikeCommentDto } from './dto/remove-like-comment.dto';

import { GetLikeNovelsService } from './services/get-like-novels.service';
import { GetLikeCommentsService } from './services/get-like-comments.service';
import { GetLikeSentenceService } from './services/get-like-sentence.service';
import { GetLikeUsersByNovelService } from './services/get-like-users-by-novel.service';
import { LikeNovelService } from './services/like-novel.service';
import { RemoveLikeNovelService } from './services/remove-like-novel.service';
import { LikeSentenceService } from './services/like-sentence.service';
import { RemoveLikeSentenceService } from './services/remove-like-sentence.service';
import { LikeCommentService } from './services/like-comment.service';
import { RemoveLikeCommentService } from './services/remove-like-comment.service';

@Controller('likes')
export class LikeController {
  constructor(
    private readonly getLikeNovelsService: GetLikeNovelsService,
    private readonly getLikeCommentsService: GetLikeCommentsService,
    private readonly getLikeSentenceService: GetLikeSentenceService,
    private readonly getLikeUsersByNovelService: GetLikeUsersByNovelService,
    private readonly likeNovelService: LikeNovelService,
    private readonly removeLikeNovelService: RemoveLikeNovelService,
    private readonly likeSentenceService: LikeSentenceService,
    private readonly removeLikeSentenceService: RemoveLikeSentenceService,
    private readonly likeCommentService: LikeCommentService,
    private readonly removeLikeCommentService: RemoveLikeCommentService,
  ) {}

  // ユーザーいいねしている小説を取得
  @Get('novel')
  @UseGuards(AuthGuard('jwt'))
  async getLikeNovels(
    @Request() req: { user: JWTPayload },
  ) : Promise<GetLikeNovelResponse[] | null>  {
    const userId = req.user.userId;
    return this.getLikeNovelsService.getLikeNovels(userId);
  }

  // ユーザーいいねしているコメント情報を取得
  @Get('comment')
  @UseGuards(AuthGuard('jwt'))
  async getLikeComments(
    @Request() req: { user: JWTPayload },
  ) : Promise<GetLikeCommentResponse[] | null>  {
    const userId = req.user.userId;
    return this.getLikeCommentsService.getLikeComments(userId);
  }

  // ユーザーいいねしている文章の小説情報を取得
  @Get('sentence')
  @UseGuards(AuthGuard('jwt'))
  async getLikeSentence(
    @Request() req: { user: JWTPayload },
  ) : Promise<GetLikeSentenceResponse[] | null>  {
    const userId = req.user.userId;
    return this.getLikeSentenceService.getLikeSentence(userId);
  }

  // ユーザーいいねしている小説を取得
  @Get(':novelId')
  async getLikeUsersNovel(
    @Param('novelId') novelId: string,
  ): Promise<GetLikeUsersByNovelResponse[]> {
    return this.getLikeUsersByNovelService.getLikeUsers(novelId);
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

  // コメントにいいね
  @Post('comment')
  @UseGuards(AuthGuard('jwt'))
  async likeComment(
      @Body() likeCommentDto: LikeCommentDto,
      @Request() req: { user: JWTPayload },
  ): Promise<LikeCommentResponse> {
    likeCommentDto.userId = req.user.userId
    return this.likeCommentService.likeComment(likeCommentDto);
  }

  // コメントいいね削除
  @Delete('comment')
  @UseGuards(AuthGuard('jwt'))
  async removeLikeComment(
      @Body() removeLikeCommentDto: RemoveLikeCommentDto,
      @Request() req: { user: JWTPayload },
  ): Promise<{ message: string }> {
    removeLikeCommentDto.userId = req.user.userId;
    return this.removeLikeCommentService.removeLikeComment(removeLikeCommentDto);
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