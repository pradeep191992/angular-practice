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
  totalAmount = '';
  

  constructor(
    public cartService: CartExpandService,
    public addtoCardService: AddtoCartService,
    ) { }

  ngOnInit(): void {
    this.addtoCardService.getData();
    // this.addtoCardService.arrayItem.forEach((element) => {
    //   this.totalAmount = element;
    //   console.log(this.totalAmount , 'element');
    // });
  }

  totalPrice(event: any) { 
   console.log(event);
    this.totalAmount + event;
  }

}
