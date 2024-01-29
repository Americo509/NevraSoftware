import { CreateProductDto } from './dto/create-product.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebirdQuery } from  'firebird-query';

@Injectable()
export class AppService {

  db = new FirebirdQuery()

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
      const product = new FirebirdQuery ();
      return await product.queryRaw `
        INSERT INTO PRODUTO (PROCODIGO, PRODESCRICAORESUMIDA, PRODESCRICAOCOMPLETA) VALUES (
          ${createProductDto.codProduto}, 
          ${createProductDto.descricaoResumida}, 
          ${createProductDto.descricaoCompleta})`
          .execute();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
