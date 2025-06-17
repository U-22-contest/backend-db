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
} from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';
import { SearchNovelsDto } from './dto/search-novels.dto';

import { CreateNovelsService } from './services/create-novels.service';
import {
  GetAllNovelsService,
  GetAllNovelsResponse,
} from './services/get-all-novels.service';
import {
  GetNovelsByIdService,
  GetNovelByIdResponse,
} from './services/get-novel-by-id.service';
import { DeleteNovelsService } from './services/delete-novels.service';
import { SearchNovelsService } from './services/search-novels';
import { CreateNovelResponse } from './types/novel.types';
import { Query } from '@nestjs/common';
import { Novel } from './types/novel.types';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('novels')
export class NovelsController {
  constructor(
    private readonly createNovelsService: CreateNovelsService,
    private readonly getAllNovelsService: GetAllNovelsService,
    private readonly getNovelsByIdService: GetNovelsByIdService,
    private readonly deleteNovelsService: DeleteNovelsService,
    private readonly searchNovelsService: SearchNovelsService,
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
    const imagePath = file ? `./../../img/cover/${file.filename}` : null;
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
  async findOne(
    @Param('novelid') novelid: string,
  ): Promise<GetNovelByIdResponse> {
    return this.getNovelsByIdService.getNovelById(novelid);
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
}
