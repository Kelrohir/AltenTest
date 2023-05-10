import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/class/product.class';
import { ProductsService } from '../../products/services/products.service';
import { AdminService } from '../admin.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './dialog/create/create.component';
import { UpdateComponent } from './dialog/update/update.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private adminService: AdminService, private matDialog: MatDialog ) { }

  ngOnInit(): void {
    this.adminService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  createProduct() {
    this.matDialog.open(CreateComponent, {
      data: {},
    }).afterClosed().subscribe((result: Product[]) => {
      if(!!result){
        this.products = result;
      }
    });
  }

  updateProduct(productId: string) {
    this.matDialog.open(UpdateComponent, {
      data: {productId, product: this.products.find((x) => x.id === productId)},
    }).afterClosed().subscribe((result: Product[]) => {
      if(!!result){
        this.products = result;
      }
    });
  }

  deleteProduct(productId: string) {
    this.adminService.deleteProduct(productId).subscribe((res: Product[]) => {
      this.products = res;
    });
  }

}
