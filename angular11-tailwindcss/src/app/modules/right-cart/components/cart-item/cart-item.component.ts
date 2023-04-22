import { AddtoCartService } from './../../../../core/services/addto-cart.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() set item(value: any ){
    this.cardValues = value;
    this.productPrice = value.productPrice * value.quantity;
  }
  @Input() i: any;
  @Output() totalPriceEvent = new EventEmitter();

  productPrice!: any;
  cardValues!: any;

  constructor(public addtoCartService: AddtoCartService) { }

  updateCartValues(data: any){
    this.addtoCartService.updateQuantity(this.i, data)
    if (data < 1) {
      this.addtoCartService.removeItem(this.i)
    }
    this.totalPriceEvent.emit()
  }

}
