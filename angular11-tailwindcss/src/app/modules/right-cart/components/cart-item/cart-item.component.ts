import { AddtoCartService } from './../../../../core/services/addto-cart.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: any;
  @Input() i: any;
  @Output() totalPriceEvent = new EventEmitter();

  constructor(public addtoCartService: AddtoCartService) { }

  ngOnInit(): void {
    
  }

  addMoreTOCart(){
    this.item.quantity = ++this.item.quantity;
    this.totalPriceEvent.emit(this.item.productPrice);
    this.addtoCartService.updateQuantity(this.i, this.item.quantity)
  }

  removeFromCart(){
    if (this.item.quantity !> 0) {
      this.item.quantity = --this.item.quantity;
      this.totalPriceEvent.emit(-this.item.productPrice);
      this.addtoCartService.updateQuantity(this.i, this.item.quantity)
    } 
    else if (this.item.quantity == 0) {
      this.addtoCartService.removeItem(this.i)
    }
    
  }
}
