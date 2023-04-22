import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductHeadComponent } from './product-head/product-head.component';
import { QuantityModule } from 'src/app/modules/quantity/quantity.module';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductHeadComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    QuantityModule
  ]
})
export class ProductDetailModule { }
