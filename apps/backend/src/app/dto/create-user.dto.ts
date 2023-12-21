import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Name of the user',
    type: String,
    example: 'Gustavo Americo Rosa',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email of the user',
    type: String,
    example: 'americorosagustavo@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Password of the user',
    type: String,
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'CEP of the user',
    type: Number,
    example: 13486000,
  })
  @IsNumber()
  @IsNotEmpty()
  cep: number;
}
