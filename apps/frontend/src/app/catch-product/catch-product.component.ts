import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

interface Produto {
  procodigo: number;
  descricaoresumida: string;
  descricaocompleta: string;
}

@Component({
  selector: 'nevra-catch-product',
  templateUrl: './catch-product.component.html',
  styleUrls: ['./catch-product.component.css'],
})
export class CatchProductComponent {

  produto: Produto = { procodigo: 0, descricaoresumida: '', descricaocompleta: '' };

  constructor(
    private service: AppService,
    private router: Router,
  ) {}

  navigateToCatchProduct() {
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
