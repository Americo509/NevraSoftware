import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':cep')
  async getCEP(@Param('cep') cep: string) {
    return await this.appService.getCEP(cep);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.appService.create(createUserDto);
  }
}
