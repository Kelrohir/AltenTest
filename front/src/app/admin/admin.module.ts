import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BaseModule } from '../base/base.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { UpdateComponent } from './products/dialog/update/update.component';
import { CreateComponent } from './products/dialog/create/create.component';


@NgModule({
  declarations: [  
    ProductsComponent, UpdateComponent, CreateComponent
  ],
  imports: [
    AdminRoutingModule,
    MatDialogModule,
    SharedModule,
    BaseModule
  ],
  providers: []
})
export class AdminModule { }
