import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.css'],
})
export class ProductsListsComponent {
  @Input() product!: Products;
  @Input() isLoading?: boolean;
  @Input() isError?: boolean;

  @Output() deleteProductEvent = new EventEmitter<number>();

  deleteProduct(id: number) {
    this.deleteProductEvent.emit(id);
  }
}
