import {
  Controller,
  Post,
  Body,
  Request,
  Get,
  UseGuards,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
  ApiConsumes,
  ApiQuery,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { OptionalJwtAuthGuard } from '../auth/guads/optional-jwt.guard';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';
import { CreateNovelDto } from './dto/request/create-novel.dto';
import { GetAllNovelsResponse } from './dto/request/get-all-novels.dto';
import { GetNovelByIdResponse } from './dto/request/get-novel-by-id.dto';
import { SearchNovelsDto } from './dto/request/search-novels.dto';
import {
  EditNovelsDto,
  EditNovelsResponse,
} from './dto/request/edit-novel.dto';
import {
  GetNovelRankingDto,
  GetNovelRankingResponse,
} from "./dto/request/get-novels-ranking.dto";

import { CreateNovelsService } from './services/create-novels.service';
import { GetAllNovelsService } from './services/get-all-novels.service';
import { GetNovelsByIdService } from './services/get-novel-by-id.service';
import { GetPreviewByIdService } from './services/get-preview-by-id.service';
import { DeleteNovelsService } from './services/delete-novels.service';
import { SearchNovelsService } from './services/search-novels.service';
import { EditNovelService } from './services/edit-novel-by-id.service';
import { GetNovelRankingService } from "./services/get-novel-ranking.service";

import { CreateNovelResponse } from './types/novel.types';
import { Novel } from './types/novel.types';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@ApiTags('Novels')
@Controller('novels')
export class NovelsController {
  constructor(
    private readonly createNovelsService: CreateNovelsService,
    private readonly getAllNovelsService: GetAllNovelsService,
    private readonly getNovelsByIdService: GetNovelsByIdService,
    private readonly getPreviewByIdService: GetPreviewByIdService,
    private readonly deleteNovelsService: DeleteNovelsService,
    private readonly searchNovelsService: SearchNovelsService,
    private readonly editNovelService: EditNovelService,
    private readonly getNovelRankingService: GetNovelRankingService,
  ) {}

  // 小説検索
  @Get('search')
  @ApiOperation({ summary: '小説検索' })
  @ApiQuery({
    name: 'keyword',
    description: '検索キーワード',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'author',
    description: '作者名',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'categories',
    description: 'カテゴリー',
    required: false,
    type: [String],
  })
  @ApiResponse({
    status: 200, type: [Novel]
  })
  async searchNovels(
    @Query() query: SearchNovelsDto,
  ): Promise<{ novels: Novel[] }> {
    return this.searchNovelsService.searchNovel(query);
  }

  //小説投稿
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '小説投稿' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({ status: 201, type: CreateNovelResponse })
  async create(
    @Body() createNovelDto: CreateNovelDto,
    @UploadedFile() file: Express.Multer.File,
    @Request()
    req: { user: JWTPayload },
  ): Promise<CreateNovelResponse> {
    const imagePath = file ? `/uploads/covers/${file.filename}` : null;
    createNovelDto.coverImagePath = imagePath;
    return this.createNovelsService.createNovel(
      req.user.userId,
      createNovelDto,
    );
  }

  //全小説の取得
  @Get()
  @ApiOperation({ summary: '全小説取得' })
  @ApiResponse({ status: 200, type: [GetAllNovelsResponse] })
  async findAll(): Promise<GetAllNovelsResponse[]> {
    return this.getAllNovelsService.getAllNovel();
  }

  @Get('ranking')
  @ApiOperation({ summary: '小説ランキング取得' })
  @ApiQuery({
    name: 'period',
    description: '期間(WEEKLY, MONTHLY, ALL_TIME(default))　',
    required: false,
    example: 'WEEKLY'
  })
  @ApiQuery({
    name: 'categoryName',
    description: 'カテゴリー',
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    description: '取得件数（1-100）',
    required: false,
    type: Number,
    example: 20
  })
  @ApiQuery({
    name: 'offset',
    description: 'オフセット（ページネーション用）',
    required: false,
    type: Number,
    example: 0
  })
  @ApiResponse({
    status: 200,
    description: '小説ランキング',
    type: [GetNovelRankingResponse]
  })
  async getNovelRanking(
    @Query() getNovelRankingDto: GetNovelRankingDto,
  ): Promise<GetNovelRankingResponse[]> {
    return this.getNovelRankingService.getNovelRanking(getNovelRankingDto);
  }

  //idによる小説の取得
  @Get(':novelid')
  @UseGuards(OptionalJwtAuthGuard)
  @ApiOperation({ summary: 'id指定小説取得　＊ログイン時トークン送信してください' })
  @ApiParam({
    name: 'novelid',
    description: '小説ID',
  })
  @ApiResponse({
    status: 200,
    description: '小説詳細情報',
    type: GetNovelByIdResponse
  })
  async findOne(
    @Param('novelid') novelId: string,
    @Request() req: { user?: JWTPayload }
  ): Promise<GetNovelByIdResponse> {
    const userId = req.user?.userId;
    return this.getNovelsByIdService.getNovelById(novelId, userId);
  }

  //小説の削除
  @Delete(':novelId')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '小説削除' })
  @ApiParam({
    name: 'novelId',
    description: '削除する小説ID',
  })
  @ApiResponse({
    status: 200,
    description: 'novelを削除しました',
  })
  async delete(
    @Param('novelId') novelid: string,
    @Request() req: { user: JWTPayload },
  ): Promise<{ message: string }> {
    return this.deleteNovelsService.deleteNovel(novelid, req.user.userId);
  }

  // 小説の編集
  @Put(':novelId')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '小説編集' })
  @ApiParam({
    name: 'novelId',
    description: '編集する小説ID',
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200,
    type: EditNovelsResponse
  })
  async edit(
    @Param('novelId') novelid: string,
    @Request() req: { user: JWTPayload },
    @UploadedFile() file: Express.Multer.File,
    @Body() editDto: EditNovelsDto,
  ): Promise<EditNovelsResponse> {
    const imagePath = file ? `/uploads/covers/${file.filename}` : null;
    editDto.coverImagePath = imagePath;
    return this.editNovelService.editNovelById(
      novelid,
      req.user.userId,
      editDto,
    );
  }
}
