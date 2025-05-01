import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from '../dto/create-novel.dto';
import { v4 as uuidv4 } from 'uuid';
import { CreateNovelResponse } from '../types/novel.types';
import { PostgresCreateNovelRepository } from '../repositories/create-novels/postgres';
import { MongoCreateNovelRepository } from '../repositories/create-novels/mongo';

@Injectable()
export class CreateNovelsService {
  constructor(
    private readonly postgresCreateNovel: PostgresCreateNovelRepository,
    private readonly mongoCreateNovel: MongoCreateNovelRepository,
  ) {}

  //小説投稿
  async createNovel(
    createNovelDto: CreateNovelDto,
  ): Promise<CreateNovelResponse> {
    const sharedId = uuidv4();

    // PostgreSQLに保存
    const postgresNovel = await this.postgresCreateNovel.createNovel(
      sharedId,
      createNovelDto.authorId,
    );

    // MongoDBに保存
    const mongoNovel = await this.mongoCreateNovel.createNovel(
      sharedId,
      createNovelDto.title,
      createNovelDto.content,
    );
    await mongoNovel.save();

    return { postgresNovel, mongoNovel };
  }
}
