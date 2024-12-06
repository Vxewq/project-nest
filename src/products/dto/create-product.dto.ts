import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name_uz: string;
  @IsString()
  name_ru: string;
  @IsString()
  name_en: string;
  
  @IsString()
  description_uz: string;
  @IsString()
  description_ru: string;
  @IsString()
  description_en: string;

  @IsNumber()
  quantity: number;

  @IsBoolean()
  status: boolean;

  @IsNumber()
  price: number;

  @IsString()
  color: string;

  @IsString()
  image: string;
}
