import { productCardModal } from './../../modal/product-card.modal';
import { AddtoCartService } from './../../core/services/addto-cart.service';
import { CartExpandService } from './../../core/services/cart-expand.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-cart',
  templateUrl: './right-cart.component.html',
  styleUrls: ['./right-cart.component.scss']
})
export class RightCartComponent implements OnInit {
  totalAmount: any;
  

  constructor(
    public cartService: CartExpandService,
    public addtoCardService: AddtoCartService,
    ) { }

  ngOnInit(): void {
    this.addtoCardService.getData();
    this.totalPrice();
  }

  totalPrice() {
   this.totalAmount = localStorage.getItem('cartTotalValue')
  }

}
