import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export type ProductsDocument = HydratedDocument<Products>;

@Schema()
export class Products {
  @Prop()
  @IsString()
  name_uz: string;
  @Prop()
  @IsString()
  name_ru: string;
  @Prop()
  @IsString()
  name_en: string;

  @Prop()
  @IsString()
  description_uz: string;

  @Prop()
  @IsString()
  description_ru: string;
  
  @Prop()
  @IsString()
  description_en: string;

  @Prop()
  @IsNumber()
  quantity: number;

  @Prop()
  @IsBoolean()
  status: boolean;

  @Prop()
  @IsNumber()
  price: number;

  @Prop()
  @IsString()
  color: string;

  @Prop()
  @IsString()
  image: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
