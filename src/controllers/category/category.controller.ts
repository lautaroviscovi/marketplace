import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Post()
  createCategory(): string {
    return 'All done';
  }

  @Get()
  getAllCategories() {
    return `all`;
  }

  @Get(':categoryId')
  getCategory(@Param('categoryId') categoryId: string) {
    return `Category ${categoryId}`;
  }
}
