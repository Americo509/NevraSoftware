import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

interface Produto {
  procodigo: number;
  descricaoresumida: string;
  descricaocompleta: string;
}

@Component({
  selector: 'nevra-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
})
export class SearchProductComponent {

  produto: Produto = { procodigo: 0, descricaoresumida: '', descricaocompleta: '' };

  constructor(
    private service: AppService,
    private router: Router,
  ) {}

  navigateToSearchProduct() {
    this.router.navigate(['/search']);
  }

  getProductById(id: number): void {
    this.service.getProductById(id).subscribe((product: any) => {
      console.log(product);

      // Atualizar a propriedade com os valores obtidos do serviço
      this.produto = product;
    });
  }

  convertToNumber(value: string): number {
    return Number(value);
  }
}
