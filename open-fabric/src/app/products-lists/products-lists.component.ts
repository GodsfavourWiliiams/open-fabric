import { Component, Input } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.css'],
})
export class ProductsListsComponent {
  @Input() product!: Products;
}
