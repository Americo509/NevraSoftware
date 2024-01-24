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

  codProdutoValue: string = '';
  descricaoResumidaValue: string = '';
  descricaoCompletaValue: string = '';

  constructor(
    private router: Router,
    private service: AppService
  ) {}

  navigateToCreateProduct() {
    this.router.navigate(['/create']);
  }

  createNewProduct(productForm: any) {
    if (!productForm.valid) {
      console.error('Por favor, preencha todos os campos antes de criar o produto. Certifique-se de que todos os campos estão corretamente preenchidos.');
      return;
    }
  
    const produto: Produto = {
      codProduto: +this.codProdutoValue, // Convertendo para número
      descricaoResumida: this.descricaoResumidaValue,
      descricaoCompleta: this.descricaoCompletaValue
    };
  
    this.service.createProduct(produto);
  }
  
}
