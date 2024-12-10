import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryProducts } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(CategoryProducts.name) private categoryModel: Model<CategoryProducts>,
  ) {}
  async create(CreateCategoryDto: CreateCategoryDto) {
    try {
      const newProduct = await this.categoryModel.create(CreateCategoryDto);
      return newProduct;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async findAll() {
    try {
      const all = await this.categoryModel.find().exec();
      return all;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async findOne(id: string) {
    try {
      const uno = await this.categoryModel.findById(id).exec();
      return uno;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const updated = await this.categoryModel
        .findByIdAndUpdate(id, updateCategoryDto, { new: true })
        .exec();
      return updated;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async remove(id: string) {
    try {
      const deleted = await this.categoryModel.findByIdAndDelete(id).exec();
      return "The products deleted succesfully";
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }
}
