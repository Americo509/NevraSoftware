import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Produto } from '../interfaces/produto.interface';

@Component({
  selector: 'nevra-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  codigoProdutoValue: string = '';
  descricaoResumidaValue: string = '';
  descricaoCompletaValue: string = '';

  constructor(
    private router: Router,
    private service: AppService
  ) {}

  navigateToCreateProduct() {
    this.router.navigate(['/create']);
  }

  convertToNumber(value: string): number {
    return Number(value);
  }

  createNewProduct() {
    if (!this.codigoProdutoValue || !this.descricaoResumidaValue || !this.descricaoCompletaValue) {
      console.error('Por favor, preencha todos os campos antes de criar o produto. Certifique-se de que todos os campos estão corretamente preenchidos.');
      return; // Retorna para evitar a execução do código seguinte se os campos não estiverem preenchidos
    }
  
    const novoProduto: Produto = {
      codProduto: +this.codigoProdutoValue, // Convertendo para número
      descricaoResumida: this.descricaoResumidaValue,
      descricaoCompleta: this.descricaoCompletaValue
    };
  
    this.service.createProduct(novoProduto);
  }
  
}
