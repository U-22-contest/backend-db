import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryRepository } from './repositories/create-category/postgres';
import { CategoriesController } from './categories.controller';
import { CreateCategoryService } from './services/create-categoy.serice';

@Module({
  controllers: [CategoriesController],
  providers: [CreateCategoryService, CreateCategoryRepository, PrismaService],
  exports: [CreateCategoryService],
})
export class CategoriesModule {}
