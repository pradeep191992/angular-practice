import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    ProductCardComponent
  ],
  bootstrap: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
