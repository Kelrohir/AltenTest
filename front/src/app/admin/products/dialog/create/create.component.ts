import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../../shared/class/product.class';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateComponent>, private adminService: AdminService, @Inject(MAT_DIALOG_DATA) public data: {}) { }

  ngOnInit(): void {
  }

  productForm = new FormGroup({
    code: new FormControl<string>('', Validators.required),
    name: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
    price: new FormControl<number>(null),
    quantity: new FormControl<number>(null),
    inventoryStatus: new FormControl<string>(''),
    category: new FormControl<string>(''),
    image: new FormControl<string>(''),
    rating: new FormControl<number>(null),
  });

  validate() {
    this.adminService.createProduct(this.productForm.value as Product).subscribe((res: Product[]) => {
      this.dialogRef.close(res);
    });
  }
}