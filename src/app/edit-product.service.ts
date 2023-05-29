import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root',
})
export class EditProductService {
  private productSource = new BehaviorSubject<Products | undefined>(undefined);
  currentProduct = this.productSource.asObservable();

  constructor() {}

  openDialog(product: Products) {
    this.productSource.next(product);
  }
  closeDialog() {
    this.productSource.next(undefined);
  }
}
