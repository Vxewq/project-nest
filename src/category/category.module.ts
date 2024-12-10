import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryProducts, CategoryProductsSchema } from './entities/category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoryProducts.name, schema: CategoryProductsSchema },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
