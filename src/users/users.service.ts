import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<Users>,
  ) {}

  async create(CreateUserDto:CreateUserDto) {
    try {
      const newUser = await this.userModel.create(CreateUserDto);
      return newUser;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async findAll() {
    try {
      const all = await this.userModel.find().populate('category').exec();
      return all;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async findOne(id: string) {
    try {
      const uno = await this.userModel.findById(id).exec();
      return uno;
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }

  async update(id: string, updateProductDto: UpdateUserDto) {
    try {
      const updated = await this.userModel
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
      const deleted = await this.userModel.findByIdAndDelete(id).exec();
      return "The user deleted succesfully";
    } catch (error) {
      console.log(error);
      return 'Something went wrong';
    }
  }
}
