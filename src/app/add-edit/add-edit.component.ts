import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {});
  }
}

@Component({
  selector: 'app-dialogg',
  templateUrl: 'dialog.html',
  styleUrls: ['./add-edit.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class DialogDataExampleDialog implements OnInit {
  productForm: FormGroup = new FormGroup({});

  existingIds: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imgUrl: ['', Validators.required],
    });

    this.existingIds = await this.productService.getExistingIds();
  }

  generateRandomId(): string {
    let randomId = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 8;

    for (let i = 0; i < idLength; i++) {
      randomId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return randomId;
  }

  async addProduct() {
    if (!this.productForm.valid) {
      return;
    }

    const newId = this.generateRandomId();
    const newProduct = {
      id: newId,
      title: this.productForm.value.title,
      color: this.productForm.value.color,
      price: this.productForm.value.price,
      description: this.productForm.value.description,
      imgUrl: this.productForm.value.imgUrl,
    };

    try {
      await fetch(this.productService.url, {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      console.log('Product added successfully');
    } catch (error) {
      console.log('Failed to add product', error);
    }

    // Optional: Clear the form after adding the product
    this.productForm.reset();
  }
}
