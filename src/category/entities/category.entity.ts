import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export type CategoryProductsDocument = HydratedDocument<CategoryProducts>;

@Schema()
export class CategoryProducts {
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
  image: string;
}

export const CategoryProductsSchema = SchemaFactory.createForClass(CategoryProducts);
