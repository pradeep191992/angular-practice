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
    // this.addtoCart.getData();
    setTimeout(() => {
      this.product.quantity = 1;
    }, 100);

  }
  
  addMoreTOCart(){
    this.product.quantity = ++this.product.quantity;
    // this.totalPriceEvent.emit(this.product.productPrice);
    // this.addtoCart.updateQuantity(null, this.quantity)
  }

  removeFromCart(){
    if (this.product.quantity !> 0) {
      this.product.quantity = --this.product.quantity;
      // this.totalPriceEvent.emit(-this.item.productPrice);
      // this.addtoCart.updateQuantity(null, this.quantity)
    } 
    
  }

}
