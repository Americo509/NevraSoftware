import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':cep')
  async getCEP(@Param('cep') cep: string) {
    return await this.appService.getCEP(cep);
  }

  @Get('produtos/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return await this.appService.getProductById(id);
  }
}
