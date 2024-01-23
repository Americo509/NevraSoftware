import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Code of the product',
    type: Number,
    example: 123456,
  })
  @IsNumber()
  @IsNotEmpty()
  codProduto: number;

  @ApiProperty({
    description: 'summarized description of the product',
    type: String,
    example: 'gamer keyboard',
  })
  @IsString()
  @IsNotEmpty()
  descricaoResumida: string;

  @ApiProperty({
    description: 'complete description of the product',
    type: String,
    example: 'HyperX Alloy Origins 65 - Mechanical Gaming Keyboard - HX (US Layout), Preto, 4P5D6AA#ABA',
  })
  @IsString()
  @IsNotEmpty()
  descricaoCompleta: string;
}
