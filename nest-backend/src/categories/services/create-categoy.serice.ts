import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateCategoryRepository } from '../repositories/create-category/postgres';
import { Category } from '../../../generated/postgresql';

@Injectable()
export class CreateCategoryService {
  constructor(
    private readonly createCategoryRepository: CreateCategoryRepository,
  ) {}

  async execute(dto: CreateCategoryDto): Promise<Category> {
    const existing = await this.createCategoryRepository.findByName(
      dto.categoryName,
    );
    if (existing) return existing;

    return this.createCategoryRepository.createCategory(dto);
  }
}
