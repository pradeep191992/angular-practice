import { AddtoCartService } from './../../core/services/addto-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  totalCartPrice: any;
  constructor(
    public addtoCardService: AddtoCartService
  ) { }

  ngOnInit(): void {
    this.totalPrice();
  }

  totalPrice() {
    this.totalCartPrice = localStorage.getItem('cartTotalValue')
   }

}
