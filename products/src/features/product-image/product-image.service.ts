import { Injectable } from '@nestjs/common';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';
import { ProductImage } from './entities/product-image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  findOne(id: number) {
    return `This action returns a #${id} productImage`;
  }

  update(id: number, updateProductImageDto: UpdateProductImageDto) {
    return `This action updates a #${id} productImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} productImage`;
  }
}
