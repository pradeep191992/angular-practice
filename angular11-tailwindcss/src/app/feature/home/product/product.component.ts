import { AddtoCartService } from './../../../core/services/addto-cart.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
    
  arrayItem: string[] = [];
  addCartObj = [];

  @Output() productData = new EventEmitter()
  constructor(
    public addToList: AddtoCartService,
  ) { }
  @Input() item: any;

  ngOnInit(): void {
    
  }
  sendData(){
    this.productData.emit(this.item)
  }

}
