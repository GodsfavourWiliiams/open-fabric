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
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productList = this.productService.getAllProduct();
  }
}
