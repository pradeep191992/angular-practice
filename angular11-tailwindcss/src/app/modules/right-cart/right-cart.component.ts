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
  totalAmount = 0;
  

  constructor(
    public cartService: CartExpandService,
    public addtoCardService: AddtoCartService,
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

  totalPrice(event: any) { 
   this.totalAmount += event;
  }

}
