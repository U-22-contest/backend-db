import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../dto/create-category.dto';
import { Category } from '../../../../generated/postgresql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreateCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByName(categoryName: string): Promise<Category | null> {
    return this.prisma.category.findFirst({
      where: { categoryName },
    });
  }

  async createCategory(dto: CreateCategoryDto): Promise<Category> {
    return this.prisma.category.create({
      data: {
        categoryName: dto.categoryName,
      },
    });
  }
}
