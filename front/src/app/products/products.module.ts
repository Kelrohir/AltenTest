import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseModule } from '../base/base.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    BaseModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
