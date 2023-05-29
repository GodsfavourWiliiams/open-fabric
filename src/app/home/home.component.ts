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
  isLoading = true;
  error: any = null;

  productService: ProductService = inject(ProductService);

  constructor() {
    this.fetchProducts();
  }

  async fetchProducts() {
    this.isLoading = true;
    this.error = null;

    try {
      this.productList = await this.productService.getAllProduct();
      console.log(this.productList);
    } catch (error) {
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  }
}
