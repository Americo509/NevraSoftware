import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('produtos/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return await this.appService.getProductById(id);
  }
}
