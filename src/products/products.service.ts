import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private productsModel: Model<Products>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const newProduct = await this.productsModel.create(createProductDto);
      return newProduct;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async findAll(sortBy, order, page, limit) {

    const sortOrder = order === "ASK" ? 1 : -1
    const pageAll = page | 1
    const limitAll = limit | 2
    try {
      const all = await this.productsModel.find().sort({[sortBy]: sortOrder}).populate('category').skip((pageAll * limitAll) - limitAll).exec();
      
      const total = await this.productsModel.countDocuments()
      return {products: all, total: total};
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async findOne(id: string) {
    try {
      const uno = await this.productsModel.findById(id).exec();
      return uno;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const updated = await this.productsModel
        .findByIdAndUpdate(id, updateProductDto, { new: true })
        .exec();
      return updated;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async remove(id: string) {
    try {
      const deleted = await this.productsModel.findByIdAndDelete(id).exec();
      return "The products deleted succesfully";
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }
}
