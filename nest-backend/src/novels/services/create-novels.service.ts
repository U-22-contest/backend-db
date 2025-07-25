import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from '../dto/request/create-novel.dto';
import { v4 as uuidv4 } from 'uuid';
import { CreateNovelResponse } from '../types/novel.types';
import { PostgresCreateNovelRepository } from '../repositories/create-novels/postgres';
import { MongoCreateNovelRepository } from '../repositories/create-novels/mongo';
import { CreateCategoryService } from 'src/categories/services/create-categoy.serice';

@Injectable()
export class CreateNovelsService {
  constructor(
    private readonly postgresCreateNovel: PostgresCreateNovelRepository,
    private readonly mongoCreateNovel: MongoCreateNovelRepository,
    private readonly createCategoryService: CreateCategoryService,
  ) {}

  //小説投稿
  async createNovel(
    authorId: string,
    createNovelDto: CreateNovelDto,
  ): Promise<CreateNovelResponse> {
    const sharedId = uuidv4();

    const categoryName = Array.isArray(createNovelDto.categoryNames)
      ? createNovelDto.categoryNames
      : [createNovelDto.categoryNames].filter(Boolean);

    const categoryIds: string[] = await Promise.all(
      categoryName.map(async (name) => {
        const category = await this.createCategoryService.execute({
          categoryName: name,
        });
        return category.categoryId;
      }),
    );

    // PostgreSQLに保存
    const postgresNovel = await this.postgresCreateNovel.createNovel(
      sharedId,
      authorId,
      createNovelDto.coverImagePath ?? null,
      createNovelDto.title,
      categoryIds,
    );

    // MongoDBに保存
    const mongoNovel = await this.mongoCreateNovel.createNovel(
      sharedId,
      createNovelDto.content,
      createNovelDto.overview,
    );
    await mongoNovel.save();

    return { postgresNovel, mongoNovel };
  }
}
