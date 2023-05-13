import { Product, productCardModal } from './../../modal/product-card.modal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = "./../assets/dummyData/";
  
  shoeList = 'https://mocki.io/v1/1af445b8-6bf1-407c-898a-030270e9149c';
  similarShoe = 'https://mocki.io/v1/1af445b8-6bf1-407c-898a-030270e9149c'

  product: Observable<productCardModal[]> | any;
  
  singleItem = {};
  constructor(
    private http: HttpClient
  ) { }

  getShoeProducts() {
    // return this.http.get(this.url+'shoeProduct.json');
    return this.http.get(this.shoeList);
  }

  getProducts() {
    // return this.http.get(this.url+'similar-product.json');
    return this.http.get(this.similarShoe);
  }

  getSingleProduct(id: any) {
    // return this.http.get(this.url+'shoeProduct.json').pipe( map(
    return this.http.get(this.shoeList).pipe( map(
     (response: any) => {
       return response.shoeProducts.find((p: any) => p?.product_id == id);
     }));
  }

  searchProduct(value: string) {
    // return this.http.get(this.url+'shoeProduct.json').pipe( map(
    return this.http.get(this.shoeList).pipe( map(
     (response: any) => {
      // debugger
      return response.shoeProducts.filter((data: any) =>
        JSON.stringify(data).toLowerCase().includes(value.toLowerCase())
      )
     }
    ));
  }

  dataBrandWise(brand: string) {
    // return this.http.get(this.url+'shoeProduct.json').pipe( map(
    return this.http.get(this.shoeList).pipe( map(
     (response: any) => {
      return response.filter((data: any) =>
        JSON.stringify(data.shoeProducts).toLowerCase().includes(brand.toLowerCase())
      )
     }
    ));
  }

}
