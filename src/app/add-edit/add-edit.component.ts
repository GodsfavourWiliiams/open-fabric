import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  Inject,
} from '@angular/core';
import { Products } from '../products';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EditProductService } from '../edit-product.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent {
  product: Products | undefined;

  constructor(
    public dialog: MatDialog,
    private editProductService: EditProductService
  ) {}

  ngOnInit() {
    this.editProductService.currentProduct.subscribe((product) => {
      this.product = product;
      if (product) {
        this.openDialog();
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: {
        product: this.product,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        // Refresh the product list or perform any necessary actions after successful add/edit
      } else {
        this.product = undefined; // Clear the passed product
      }
    });
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
  @Input() product: Products | undefined;
  productForm: FormGroup = new FormGroup({});

  @Output() productAddedOrUpdated: EventEmitter<string> =
    new EventEmitter<string>();

  existingIds: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Products | undefined }
  ) {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imgUrl: ['', Validators.required],
    });
  }

  async ngOnInit() {
    if (this.data.product) {
      this.productForm.patchValue({
        title: this.data.product.title || '',
        color: this.data.product.color || '',
        price: this.data.product.price || '',
        description: this.data.product.description || '',
        imgUrl: this.data.product.imgUrl || '',
      });
    }
    // console.log(this.data.product);
    this.existingIds = await this.productService.getExistingIds();
  }

  generateRandomId(): string {
    let randomId = '';
    const characters = '0123456789';
    const idLength = 4;

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
    if (this.data.product) {
      // Editing existing product
      const updatedProduct = {
        id: this.data.product.id, // Using this.data.product instead of this.product
        title: this.productForm.value.title,
        color: this.productForm.value.color,
        price: this.productForm.value.price,
        description: this.productForm.value.description,
        imgUrl: this.productForm.value.imgUrl,
      };

      try {
        await fetch(`${this.productService.url}/${this.data.product.id}`, {
          // Using this.data.product instead of this.product
          method: 'PUT',
          body: JSON.stringify(updatedProduct),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        alert('Product updated successfully');
      } catch (error) {
        alert('Failed to update product' + ' ' + error);
      }
    } else {
      // Adding new product
      const newId = this.generateRandomId();
      const newProduct = {
        id: newId,
        title: this.productForm.value.title,
        color: this.productForm.value.color,
        price: this.productForm.value.price,
        description: this.productForm.value.description,
        imgUrl: this.productForm.value.imgUrl,
      };
      console.log(newProduct);
      try {
        await fetch(this.productService.url, {
          method: 'POST',
          body: JSON.stringify(newProduct),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        alert('Product added successfully');
      } catch (error) {
        alert('Failed to add product' + ' ' + error);
      }
    }
    // Optional: Clear the form after adding the product
    this.productForm.reset();
  }
}
