import { AddtoCartService } from './../../core/services/addto-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  totalAmount = 0;
  constructor(
    public addtoCardService: AddtoCartService
  ) { }

  ngOnInit(): void {
    this.addtoCardService.getData();
    this.getPrice();
  }
  getPrice(){
    this.addtoCardService.arrayItem.forEach((element) => {
      this.totalAmount += element.productPrice*element.quantity;
    });
  }
}
