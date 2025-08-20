import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from 'generated/postgresql';
import { CreateCategoryService } from './services/create-categoy.serice';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @Post()
  @ApiOperation({ summary: 'カテゴリー追加' })
  @ApiResponse({ status: 201 })
  async createCategory(@Body() dto: CreateCategoryDto): Promise<Category> {
    return this.createCategoryService.execute(dto);
  }
}
