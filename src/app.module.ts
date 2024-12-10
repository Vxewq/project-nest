import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
const mongoDb_Link = "mongodb+srv://baluplay15:IcGzXoeQCgZgCPvV@shoxrux.9n2sa.mongodb.net/"
@Module({
  imports: [MongooseModule.forRoot(mongoDb_Link),ProductsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
