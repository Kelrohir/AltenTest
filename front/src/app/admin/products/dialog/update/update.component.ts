import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../../admin.service';
import { Product } from '../../../../shared/class/product.class';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateComponent>, 
    private adminService: AdminService, 
    @Inject(MAT_DIALOG_DATA) public data: { productId: string, product: Product}) { }

  ngOnInit(): void {
  }

  productForm = new FormGroup({
    code: new FormControl<string>(this.data.product.code, Validators.required),
    name: new FormControl<string>(this.data.product.name, Validators.required),
    description: new FormControl<string>(this.data.product.description),
    price: new FormControl<number>(this.data.product.price),
    quantity: new FormControl<number>(this.data.product.quantity),
    inventoryStatus: new FormControl<string>(this.data.product.inventoryStatus),
    category: new FormControl<string>(this.data.product.category),
    image: new FormControl<string>(this.data.product.image),
    rating: new FormControl<number>(this.data.product.rating),
  });

  validate() {
    let updatedProduct = this.productForm.value as Product;
    updatedProduct.id = this.data.productId;
    this.adminService.updateProduct(this.data.productId, updatedProduct).subscribe((res: Product[]) => {
      this.dialogRef.close(res);
    });
  }
}
