import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightCartComponent } from './right-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { QuantityModule } from '../quantity/quantity.module';



@NgModule({
  declarations: [
    RightCartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    QuantityModule
  ],
  exports: [
    RightCartComponent,
  ]
})
export class RightCartModule { }
