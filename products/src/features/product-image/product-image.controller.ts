import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';
import { Response } from 'express';

@Controller('product-image')
export class ProductImageController {
  constructor(private readonly productImageService: ProductImageService) {
    // this.productImageService.updateImageBase();
  }

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
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const productImage = await this.productImageService.findOne(id);
      // const productImage = await this.productImageService.findOne(id);
      return res.status(200).json({
        message: 'image fetched success',
        data: productImage
      });
    } catch (error) {
      return res.status(400).json({
        ...error
      });
    }
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
