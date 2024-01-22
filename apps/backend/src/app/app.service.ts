import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebirdService } from './connection/firebird.service';

@Injectable()
export class AppService {
  async getCEP(cep: string) {
    const cepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const cepJson = await cepResponse.json();
    return cepJson;
  }

  async getProductById(id: number): Promise<any> {
    try {
      const firebirdService = new FirebirdService();
      return await firebirdService.executeQuery(
        'SELECT * FROM PRODUTO P WHERE P.PROCODIGO = ' + id,
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
