import {Controller, Post, Body, Request, Get, UseGuards, Param} from '@nestjs/common';
import { NovelsService } from './novels.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('novels')
export class NovelsController {
  constructor(private readonly novelsService: NovelsService) {}

  //小説投稿
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createNovelDto: CreateNovelDto, @Request() req: any) {
    createNovelDto.authorId = req.user.userId;
    return this.novelsService.createNovel(createNovelDto);
  }


  //全小説の取得
  @Get()
  // @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.novelsService.getAllNovel();
  }

  //idによる小説の取得
  @Get(':novelid')
  // @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('novelid') novelid: string) {
    return this.novelsService.getNovelById(novelid);
  }
}
