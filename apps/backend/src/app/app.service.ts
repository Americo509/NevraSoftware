import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async getCEP(cep: string) {
    const cepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const cepJson = await cepResponse.json();
    return cepJson;
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userRepository
        .createQueryBuilder()
        .insert()
        .values(createUserDto)
        .execute();
      return user.raw[0];
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
