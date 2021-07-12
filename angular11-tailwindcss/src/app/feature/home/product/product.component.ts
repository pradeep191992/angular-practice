import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input() item: any;

  
  // public get value() : string {
  //   return this.shoeProduct
  // }
  

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.shoeProduct)
    // }, 500);
  }

}
