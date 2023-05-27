import { Component, Input } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
  @Input() products!: Products;
}
