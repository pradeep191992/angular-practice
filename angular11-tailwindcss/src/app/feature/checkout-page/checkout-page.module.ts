import { RightCartModule } from './../../modules/right-cart/right-cart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutPageRoutingModule } from './checkout-page-routing.module';
import { CheckoutPageComponent } from './checkout-page.component';
import { QuantityModule } from './../../modules/quantity/quantity.module';
import { CheckoutCardComponent } from './checkout-card/checkout-card.component';


@NgModule({
  declarations: [
    CheckoutPageComponent,
    CheckoutCardComponent
  ],
  imports: [
    CommonModule,
    CheckoutPageRoutingModule,
    RightCartModule,
    QuantityModule
  ]
})
export class CheckoutPageModule { }
