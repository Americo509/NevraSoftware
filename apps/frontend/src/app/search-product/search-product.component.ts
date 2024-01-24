import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

interface Produto {
  PROCODIGO: number;
  PRODESCRICAORESUMIDA: string;
  PRODESCRICAOCOMPLETA: string;
}

@Component({
  selector: 'nevra-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
})
export class SearchProductComponent {

  produto: Produto = {
    PROCODIGO: 0,
    PRODESCRICAORESUMIDA: '',
    PRODESCRICAOCOMPLETA: '',
  };

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
      this.produto = product;
    });
  }

  convertToNumber(value: string): number {
    return Number(value);
  }
}