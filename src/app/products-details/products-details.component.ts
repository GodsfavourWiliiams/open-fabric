import { Component, inject } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  product: Products | undefined;
  productService = inject(ProductService);

  constructor() {
    const params = this.route.snapshot.paramMap;
    const productId = Number(params.get('productId'));
    this.product = this.productService.getSingleProduct(productId);
    console.log(this.productService);
  }
}
