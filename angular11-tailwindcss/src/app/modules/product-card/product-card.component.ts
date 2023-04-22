import { AddtoCartService } from './../../core/services/addto-cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  
  @Input() element : any | undefined;

  @Output() dataServices = new EventEmitter();
  constructor(
    public addTOCart: AddtoCartService,
  ) { }

  ngOnInit(): void {

  }

  addToCart(clickEvent: MouseEvent){
    this.addTOCart.addToCart(this.element)
  }

  getCardData () {
    this.dataServices.emit('Data Form Card Component');
  }

}
