import { Product, productCardModal } from './../../modal/product-card.modal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = "./../assets/dummyData/";
  product: productCardModal[] | any;
  
  singleItem = {};
  constructor(
    private http: HttpClient
  ) { }

  getShoeProducts() {
    return this.http.get(this.url+'shoeProduct.json');
  }

  getProducts() {
    return this.http.get(this.url+'product.json');
  }

  // getSingleProduct(title: any) {
  //   this.getProducts().subscribe(data => {
  //     this.product = data;
  //     this.product.forEach((element: any) => {
  //       if (element.title == title) {
  //         this.singleItem = element;
  //       }
  //     });
  //   });
  //   // console.log(title);
  //   // return this.product.find((p: any) => p.title==title);
    
  //   // console.log(this.product);
  // }

}
