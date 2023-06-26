import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';
import { Response } from 'express';

@Controller('product-image')
export class ProductImageController {
  constructor(private readonly productImageService: ProductImageService) {}

  @Post()
  create(@Body() createProductImageDto: CreateProductImageDto) {
    return this.productImageService.create(createProductImageDto);
  }

  @Get()
  async findAll(@Res() response: Response) {
    try {
      const res = await this.productImageService.findAll();
      return response.status(200).json({
        message: 'product images fetched success',
        data: res
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error })
    }
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductImageDto: UpdateProductImageDto) {
    return this.productImageService.update(+id, updateProductImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productImageService.remove(+id);
  }
}
