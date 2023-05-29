import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Products } from '../products';
import { EditProductService } from '../edit-product.service';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.css'],
})
export class ProductsListsComponent {
  @Input() product!: Products;
  @Input() isLoading?: boolean;
  @Input() isError?: boolean;

  constructor(private editProductService: EditProductService) {}

  @Output() deleteProductEvent = new EventEmitter<number>();
  openEditDialog(product: Products) {
    this.editProductService.openDialog(product);
  }

  deleteProduct(id: number) {
    this.deleteProductEvent.emit(id);
  }
}
