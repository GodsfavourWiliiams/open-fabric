import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

export interface DialogData {}

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
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogDataExampleDialog implements OnInit {
  productForm: FormGroup = new FormGroup({});

  existingIds: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      color: ['', Validators.required],
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
    if (this.productForm.valid) {
      const newId = this.generateRandomId();
      const newProduct = {
        id: newId,
        title: this.productForm.value.title,
        color: this.productForm.value.color,
        description: this.productForm.value.description,
        imgUrl: this.productForm.value.imgUrl,
      };

      try {
        const response = await fetch(this.productService.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        });

        if (response.ok) {
          console.log('Product added successfully');
          // Additional logic after successfully adding the product
        } else {
          console.error('Failed to add product');
          // Additional error handling logic
        }
      } catch (error) {
        console.error('Failed to add product', error);
        // Additional error handling logic
      }
    }

    // Optional: Clear the form after adding the product
    this.productForm.reset();
  }
}
