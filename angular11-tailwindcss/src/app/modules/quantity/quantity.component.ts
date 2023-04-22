import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'item-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent {
  @Input() quantity!: any;

  @Output() updatedQuantity = new EventEmitter


  increaseCount(){
    this.quantity = ++this.quantity;
    this.updatedQuantity.emit(this.quantity)
  }

  decreaseCount(){
    if (this.quantity !> 0) {
      this.quantity = --this.quantity;
    } 
    this.updatedQuantity.emit(this.quantity)    
  }


}
