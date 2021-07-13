import { AddtoCartService } from './../../../core/services/addto-cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
    
  arrayItem: string[] = [];
  addCartObj = [];


  constructor(
    public addToList: AddtoCartService,
  ) { }
  @Input() item: any;

  public addToCart(event: string) {
    // this.addCartObj = event;
    const brand = event;
    // const proImage = event.featureImg;
    // const proPrice = event.price;
    // this.addCartObj = [ brandName: 'brand', proImage: 'proImage', proPrice: 'proPrice' ];

    // localStorage.setItem('cart-product', stringify(addCartObj));
    if (localStorage.getItem('itemJson') == null){
      this.arrayItem.push(event);
      localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    }
    console.log('brand', brand);
    
    // console.log('brand', addCartObj);
  }

  ngOnInit(): void {
    // console.log(this.addToList.addToCart('Event'))
  }

}
