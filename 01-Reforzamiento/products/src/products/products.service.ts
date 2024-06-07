/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as UuidV4} from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private  products: Product[]=[];

  create(createProductDto: CreateProductDto) {
    const {name,descripcion, price}=createProductDto;

    const newProduct = new Product(
      UuidV4(),
      name,
      descripcion,
      price);
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product= this.products.find(p=>p.id ==id);
    if (!product)
      {
        throw new NotFoundException(`Producto with id ${id} no existe`);
      }
      return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const {id:__,name,descripcion,price}=updateProductDto; //desmaterializa excepto la propiedad id
    const product = this.findOne(id);
    product.updateWith({name,descripcion,price});
    return product;
  }

  remove(id: string) {
    const product= this.findOne(id);
    this.products = this.products.filter(p=>p.id !=id);
    return product;
  }
}
