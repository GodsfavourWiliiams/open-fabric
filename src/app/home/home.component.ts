import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productList: Products[] = [];
  isLoading = false;
  isError = false;

  productService: ProductService = inject(ProductService);

  constructor() {
    this.isLoading = true;
    this.productService
      .getAllProduct()
      .then((productList: Products[]) => {
        this.productList = productList;
      })
      .catch(() => {
        this.isError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
