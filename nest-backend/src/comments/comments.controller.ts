import {
  Controller,
  Post,
  Body,
  Request,
  Get,
  Delete,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';

// service
// import { CommentsService } from './service/comments.service';
import {
  CreateCommentsService,
  CreateCommentResponse,
} from './service/create-comments.service';
import {
  GetCommentsByNovelIdService,
  GetCommentsByNovelIdResponse,
} from './service/get-comments-by-novelid.service';
import { DeleteCommentsService } from './service/delete-comments.service';
import { UpdateCommentService } from './service/update-comments.service';

@Controller('comments')
export class CommentsController {
  constructor(
    // private readonly commentsService: CommentsService,
    private readonly createCommentsService: CreateCommentsService,
    private readonly getCommentsByNovelIdService: GetCommentsByNovelIdService,
    private readonly deleteCommentsService: DeleteCommentsService,
    private readonly updateCommentService: UpdateCommentService,
  ) {}

  // 小説のコメント投稿
  @Post(':novelId')
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Param('novelId') novelId: string,
    @Body() createCommentDto: CreateCommentDto,
    @Request() req: { user: JWTPayload },
  ): Promise<CreateCommentResponse> {
    // JWT認証からuserIdの取得
    createCommentDto.userId = req.user.userId;
    createCommentDto.novelId = novelId;

    return this.createCommentsService.createComment(createCommentDto);
  }

  // コメント取得
  @Get(':novelId')
  async findAll(
    @Param('novelId') novelId: string,
  ): Promise<GetCommentsByNovelIdResponse[]> {
    return this.getCommentsByNovelIdService.getCommentsByNovelId(novelId);
  }

  // コメント削除（comment.idで削除）
  @Delete(':commentId')
  @UseGuards(AuthGuard('jwt'))
  async delete(
    @Param('commentId') commentId: string,
    @Request() req: { user: JWTPayload },
  ): Promise<{ message: string }> {
    return this.deleteCommentsService.deleteComment(commentId, req.user.userId);
  }


  @Patch(':commentId')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('commentId') commentId: string,
    @Body() updateCommentDto: UpdateCommentDto,
    @Request() req: { user: JWTPayload },
  ): Promise<{ message: string }> {
    return this.updateCommentService.updateComment(
      commentId,
      req.user.userId,
      updateCommentDto,
    );
  }
}
