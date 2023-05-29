import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // url = 'https://my-json-server.typicode.com/GodsfavourWiliiams/api/products';
  url = 'http://localhost:3000/products';
  isLoading = true;
  error: any = null;

  async getAllProduct(): Promise<Products[]> {
    try {
      this.isLoading = true;
      const data = await fetch(this.url);
      const productList = await data.json();
      this.isLoading = false;
      return productList ?? [];
    } catch (error) {
      this.isLoading = false;
      this.error = error;
      throw error;
    }
  }

  async deleteProduct(id: number): Promise<Products | undefined> {
    try {
      this.isLoading = true;
      const response = await fetch(`${this.url}/${id}`, {
        method: 'DELETE',
      });
      this.isLoading = false;
      return response.json();
    } catch (error) {
      this.isLoading = false;
      this.error = error;
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
      this.error = error;
      throw error;
    }
  }
  async getExistingIds(): Promise<string[]> {
    try {
      const data = await fetch(this.url);
      const productList = await data.json();
      return productList.map((product: any) => product.id.toString());
    } catch (error) {
      this.error = error;
      throw error;
    }
  }
  constructor() {}
}
