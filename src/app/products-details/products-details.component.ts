import { Component, inject } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: string;
}

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  product: Products | undefined;
  isLoading = true;
  isError: any = null;
  productService = inject(ProductService);

  constructor() {
    const params = this.route.snapshot.paramMap;
    const productId = Number(params.get('productId'));
    this.fetchProduct(productId);
  }

  async fetchProduct(productId: number) {
    this.isLoading = true;
    try {
      this.product = await this.productService.getSingleProduct(productId);
    } catch (error) {
      this.isError = error;
    } finally {
      this.isLoading = false;
    }
  }

  availableColors: ChipColor[] = [
    { name: 'blue', color: 'blue' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];
}
