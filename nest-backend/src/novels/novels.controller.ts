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
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';
import { CreateNovelDto } from './dto/request/create-novel.dto';
import { GetAllNovelsResponse } from './dto/request/get-all-novels.dto';
import { GetNovelByIdResponse } from './dto/request/get-novel-by-id.dto';
import { SearchNovelsDto } from './dto/request/search-novels.dto';
import { EditNovelsDto } from './dto/request/edit-novel.dto';
import { OptionalJwtAuthGuard } from '../auth/guads/optional-jwt.guard';

import { CreateNovelsService } from './services/create-novels.service';
import { GetAllNovelsService } from './services/get-all-novels.service';
import { GetNovelsByIdService } from './services/get-novel-by-id.service';
import { GetPreviewByIdService } from './services/get-preview-by-id.service';
import { DeleteNovelsService } from './services/delete-novels.service';
import { SearchNovelsService } from './services/search-novels.service';
import { EditNovelService } from './services/edit-novel-by-id.service';

import { CreateNovelResponse } from './types/novel.types';
import { Novel } from './types/novel.types';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

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
  ) {}

  // 小説検索
  @Get('search')
  async searchNovels(
    @Query() query: SearchNovelsDto,
  ): Promise<{ novels: Novel[] }> {
    return this.searchNovelsService.searchNovel(query);
  }

  //小説投稿
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file'))
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
  async findAll(): Promise<GetAllNovelsResponse[]> {
    return this.getAllNovelsService.getAllNovel();
  }

  //idによる小説の取得
  @Get(':novelid')
  @UseGuards(OptionalJwtAuthGuard)
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
  async delete(
    @Param('novelId') novelid: string,
    @Request() req: { user: JWTPayload },
  ): Promise<{ message: string }> {
    return this.deleteNovelsService.deleteNovel(novelid, req.user.userId);
  }

  // 小説の編集
  @Put(':novelId')
  @UseGuards(AuthGuard('jwt'))
  async edit(
    @Param('novelId') novelid: string,
    @Request() req: { user: JWTPayload },
    @Body() editDto: EditNovelsDto,
  ): Promise<{ message: string }> {
    return this.editNovelService.editNovelById(
      novelid,
      req.user.userId,
      editDto,
    );
  }
}
