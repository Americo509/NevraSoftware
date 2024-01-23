import { CreateProductDto } from './dto/create-product.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebirdQuery } from  'firebird-query';

@Injectable()
export class AppService {
  async getProductById(id: number): Promise<unknown> {
    try {
      const product = new FirebirdQuery ();
      return await product.queryRaw `
        SELECT * FROM PRODUTO P WHERE P.PROCODIGO = ${id}`.execute();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async createProduct(createProductDto: CreateProductDto): Promise<unknown> {
    try {
      const codProdutoQuery = new FirebirdQuery ();
      const result = await codProdutoQuery.queryRaw `
        SELECT MAX(PROCODIGO) + 1 AS CODIGO FROM PRODUTO`.execute();
      const codProduto = result[0];

      if (typeof codProduto !== 'number') {
        throw new Error('Invalid product code');
      }

      createProductDto.codProduto = codProduto + 1;

    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }

    try {
      const product = new FirebirdQuery ();
      return await product.queryRaw `
        INSERT INTO PRODUTO (PROCODIGO, PRODESCRICAO, PROVALOR) VALUES (
          ${createProductDto.codProduto}, 
          ${createProductDto.descricaoCompleta}, 
          ${createProductDto.descricaoCompleta})`
          .execute();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
