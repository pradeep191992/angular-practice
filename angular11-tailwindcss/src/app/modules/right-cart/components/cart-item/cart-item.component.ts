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
  count = 1;

  constructor(public addtoCartService: AddtoCartService) { }

  ngOnInit(): void {
  }

  addMultiple(){
    this.count = ++this.count;
    this.sendTotalPrice();
  }

  removeOneByOne(){
    if (this.count !> 0) {
      this.count = --this.count;
      this.sendTotalPrice();
    }
    // else if (this.count === 0){
    //   this.addtoCartService.removeItem(this.i)
    // }
  }

  sendTotalPrice() {
    this.totalPriceEvent.emit(this.item.proPrice)
  }

}
