import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebirdQuery } from  'firebird-query';

@Injectable()
export class AppService {
  async getProductById(id: number): Promise<any> {
    try {
      const product = new FirebirdQuery ();
      return await product.queryRaw `
        SELECT * FROM PRODUTO P WHERE P.PROCODIGO = ${id}`.execute();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
