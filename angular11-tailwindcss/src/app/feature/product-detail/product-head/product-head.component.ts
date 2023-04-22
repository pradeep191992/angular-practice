import { AddtoCartService } from './../../../core/services/addto-cart.service';
import { productCardModal } from './../../../modal/product-card.modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-head',
  templateUrl: './product-head.component.html',
  styleUrls: ['./product-head.component.scss']
})
export class ProductHeadComponent implements OnInit {

  @Input() product: productCardModal | any;
  quantity = 1;
  constructor( public addtoCart: AddtoCartService ) { }

  ngOnInit(): void {

  }

  updateItemQuantity(event: any){
    this.quantity = event;
  }
  addToCart(clickEvent: MouseEvent){
    this.addtoCart.addToCart(this.product, this.quantity)
  }

}
