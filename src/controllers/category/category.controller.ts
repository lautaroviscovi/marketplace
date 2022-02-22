import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  Delete,
} from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Post()
  create(@Body() payload: any) {
    return { message: 'Category has been created', meta: payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { message: 'Category has been updated', meta: payload }
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { message: 'Category has been deleted', meta: `Categor ID ${id}` }
  }

  @Get()
  getAll() {
    return { message: 'Ok' };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Category ${id}`;
  }
}
