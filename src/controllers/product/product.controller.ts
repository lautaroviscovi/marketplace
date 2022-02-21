import {
  Controller,
  Get,
  Put,
  Param,
  Post,
  Query,
  Body,
  Delete,
} from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Post()
  create(@Body() payload: any) {
    return { message: 'Product has been created', meta: payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { message: 'Product has been updated', meta: payload };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return { message: 'Product has been deleted', meta: `Product ID ${id}` };
  }

  @Get()
  getAll() {
    return { message: 'Ok' };
  }

  @Get('filter')
  getPaginate(@Query('limit') limit = 10) {
    return { message: limit };
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return { message: 'Get product', meta: `Product ID ${id}` };
  }
}
