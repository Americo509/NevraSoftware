import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('produtos/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number): Promise<unknown> {
    return await this.appService.getProductById(id);
  }

  @Post('produtos')
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<unknown> {
    return await this.appService.createProduct(createProductDto);
  }
}
