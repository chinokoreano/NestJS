import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, isString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateProductDto {
  @IsString()
  name:string;

  @IsString()
  @IsOptional()
  descripcion?:string;
  
  @IsNumber()
  @Type(()=>Number)
  price:number;
}
