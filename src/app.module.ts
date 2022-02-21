import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './controllers/order/order.controller';
import { UserController } from './controllers/user/user.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { CategoryController } from './controllers/category/category.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { ProductController } from './controllers/product/product.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    OrderController,
    UserController,
    CustomerController,
    CategoryController,
    BrandController,
    ProductController,
  ],
  providers: [AppService],
})
export class AppModule {}
