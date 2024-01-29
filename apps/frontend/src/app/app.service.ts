import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environmant'
import { Produto } from './interfaces/produto.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) {}

  getProductById(id: number) {
    return this.http.get(environment.apiBaseUrl + 'produtos/' + id);
  }

  createProduct(produto: Produto) {
    return this.http.post(environment.apiBaseUrl + 'produtos', produto).subscribe((response) => {
      console.log('Produto criado com sucesso!', response);
    },
    (error) => {
      console.error('Erro ao criar produto!', error)
    })
  }

}
