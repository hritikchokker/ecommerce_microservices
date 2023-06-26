import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ProductImageModule } from './product-image/product-image.module';

@Module({
  imports: [ProductModule, ProductImageModule],
  exports: [ProductModule, ProductImageModule]
})
export class FeaturesModule { }
