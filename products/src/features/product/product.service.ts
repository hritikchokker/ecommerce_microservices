import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(pageNo = 1, limit = 10) {
    const skip = Number((pageNo - 1) * limit);
    const [data, total] = await this.productRepository.createQueryBuilder('product')
      .skip(skip)
      .take(limit)
      .getManyAndCount();
    return [data, total];
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
