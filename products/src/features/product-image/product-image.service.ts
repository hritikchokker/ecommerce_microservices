import { Injectable } from '@nestjs/common';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';
import { ProductImage } from './entities/product-image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';

@Injectable()
export class ProductImageService {

  @InjectRepository(ProductImage)
  private readonly repository: Repository<ProductImage>;

  create(createProductImageDto: CreateProductImageDto) {
    return 'This action adds a new productImage';
  }

  async findAll() {
    const result = await this.repository.createQueryBuilder('product_image')
      .limit(10)
      .getMany();
    return result;
  }


  async updateImageBase(): Promise<void> {
    const imagesList = await this.repository
      .createQueryBuilder('product_image')
      .limit(5)
      .getMany();
    const productList = [];
    imagesList.forEach((image) => {
      if (image.data) {
        const base64 = Buffer.from(image.data).toString('base64');
        productList.push({ ...image, imageData: base64 });
      }
    });
    const promises = [];
    productList.forEach((image) => {
      promises.push(this.repository.update({ id: image.id }, image));
    });
    await Promise.all(promises);
    console.log('operation done');
  }

  async findOne(id: string) {
    return this.repository.createQueryBuilder('product_image')
      .where({ id })
      .getOne();
  }

  update(id: number, updateProductImageDto: UpdateProductImageDto) {
    return `This action updates a #${id} productImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} productImage`;
  }
}
