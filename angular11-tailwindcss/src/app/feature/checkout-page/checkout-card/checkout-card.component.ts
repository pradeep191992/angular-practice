import { AddtoCartService } from './../../../core/services/addto-cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss']
})
export class CheckoutCardComponent {

  @Input() set item(value: any ){
    this.productValues = value;
    this.totalCartAmount = value.productPrice * value.quantity;
  }
  @Input() index: any;
  @Output() totalPriceEvent = new EventEmitter();

  totalCartAmount!: any;
  productValues!: any;

  constructor(public addtoCartService: AddtoCartService) { }

  updateValues(data: any){
    this.addtoCartService.updateQuantity(this.index, data)
    if (data < 1) {
      this.addtoCartService.removeItem(this.index)
    }

    this.totalPriceEvent.emit()
  }
}
