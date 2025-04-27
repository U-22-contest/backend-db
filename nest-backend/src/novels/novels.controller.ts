import {
  Controller,
  Post,
  Body,
  Request,
  Get,
  UseGuards,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from "../auth/interface/jwt-payload.interface";

// import { NovelsService } from './services/novels.service';
import { CreateNovelsService, CreateNovelResponse } from './services/create-novels.service';
import { GetAllNovelsService, GetAllNovelsResponse } from './services/get-all-novels.service';
import { GetNovelsByIdService, GetNovelByIdResponse } from './services/get-novel-by-id.service';
import { DeleteNovelsService } from './services/delete-novels.service';

@Controller('novels')
export class NovelsController {
  constructor(
      // private readonly novelsService: NovelsService,
      private readonly createNovelsService: CreateNovelsService,
      private readonly getAllNovelsService: GetAllNovelsService,
      private readonly getNovelsByIdService: GetNovelsByIdService,
      private readonly deleteNovelsService: DeleteNovelsService,
  ) {}

  //小説投稿
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createNovelDto: CreateNovelDto, @Request() req: { user: JWTPayload }) : Promise<CreateNovelResponse> {
    createNovelDto.authorId = req.user.userId;
    return this.createNovelsService.createNovel(createNovelDto);
  }

  //全小説の取得
  @Get()
  async findAll() : Promise<GetAllNovelsResponse> {
    return this.getAllNovelsService.getAllNovel();
  }

  //idによる小説の取得
  @Get(':novelid')
  async findOne(@Param('novelid') novelid: string) : Promise<GetNovelByIdResponse> {
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