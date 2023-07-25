import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository, getManager } from 'typeorm';
import { ProductImage } from '../product-image/entities/product-image.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,
  ) { }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(pageNo = 1, limit = 10) {
    const skip = Number((pageNo - 1) * limit);
    const query = `SELECT * FROM product JOIN product_image ON product."imageId" = product_image.id LIMIT ${limit} OFFSET ${skip};`;
    const data = await this.productRepository.query(query);
    // Execute a separate query to get the total count
    const countQuery = 'SELECT COUNT(*) FROM product;';
    const totalCount = await this.productRepository.query(countQuery);
    const total = parseInt(totalCount[0].count, 10);
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
