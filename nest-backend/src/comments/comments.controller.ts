import { Controller, Post, Body, Request, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  // 小説のコメント投稿
  @Post(':novelId')
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Param('novelId') novelId: string,
    @Body() createCommentDto: CreateCommentDto,
    @Request() req: any,
  ) {
    // JWT認証からuserIdの取得
    // console.log(req.user);
    createCommentDto.userId = req.user.userId;
    createCommentDto.novelId = novelId;

    return this.commentsService.create(createCommentDto);
  }


  // コメント取得
  @Get(':novelId')
  // @UseGuards(AuthGuard('jwt'))
  async findAll(@Param('novelId') novelId: string) {
    return this.commentsService.findByNovelId(novelId);
  }


  // コメント削除（comment.idで削除）
  @Delete(':commentId')
  @UseGuards(AuthGuard('jwt'))
  async delete(
    @Param('commentId') commentId: string,
    @Request() req: any,
  ): Promise<any> {
    return this.commentsService.deleteBySharedId(commentId, req.user.userId);
  }
}
