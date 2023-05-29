import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'https://my-json-server.typicode.com/GodsfavourWiliiams/api/products';

  isLoading = false;
  isError = false;

  async getAllProduct(): Promise<Products[]> {
    try {
      this.isLoading = true;
      const data = await fetch(this.url);
      const productList = await data.json();
      this.isLoading = false;
      return productList ?? [];
    } catch (error) {
      this.isLoading = false;
      this.isError = true;
      throw error;
    }
  }

  async getSingleProduct(id: number): Promise<Products | undefined> {
    try {
      this.isLoading = true;
      const data = await fetch(`${this.url}/${id}`);
      const product = await data.json();
      this.isLoading = false;
      return product ?? {};
    } catch (error) {
      this.isLoading = false;
      this.isError = true;
      throw error;
    }
  }

  // getExistingIds(): string[] {
  //   // fetch the existing IDs from the database or API
  //   const existingIds = this.productList.map((product:any) =>
  //     product.id.toString()
  //   );
  //   return existingIds;
  // }

  constructor() {}
}
