import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from 'generated/postgresql';
import { CreateCategoryService } from './services/create-categoy.serice';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @Post()
  async createCategory(@Body() dto: CreateCategoryDto): Promise<Category> {
    return this.createCategoryService.execute(dto);
  }
}
