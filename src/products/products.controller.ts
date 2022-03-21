import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.services';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductsService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatedID = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { newProduct: generatedID };
  }
}
