import { Module } from "@nestjs/common";
import { ProductController } from "./products.controller";
import { ProductsService } from "./products.services";

@Module({
    controllers : [ProductController],
    providers : [ProductsService],
})

export class ProductsModule {}