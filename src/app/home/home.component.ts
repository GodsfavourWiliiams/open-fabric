import { Component, inject, EventEmitter, Output } from '@angular/core';
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

  @Output() deleteProductEvent = new EventEmitter<number>();

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

  async deleteProduct(id: number) {
    const confirmed = confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      try {
        await this.productService.deleteProduct(id);
        alert('Product deleted successfully');
        // Additional logic after successfully deleting the product
      } catch (error) {
        alert('Failed to delete product' + ' ' + error);
        // Additional error handling logic
      }
    }
  }
}
