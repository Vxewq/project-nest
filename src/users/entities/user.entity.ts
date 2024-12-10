import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  @IsString()
  username: string;

  @Prop()
  @IsString()
  password: string

  @Prop()
  @IsString()
  phone: string

  @Prop()
  @IsEmail()
  email: string
  
}

export const UsersSchema = SchemaFactory.createForClass(Users);
