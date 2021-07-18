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
  product: Observable<productCardModal[]> | any;
  
  singleItem = {};
  constructor(
    private http: HttpClient
  ) { }

  getShoeProducts() {
    return this.http.get(this.url+'shoeProduct.json');
  }

  getProducts() {
    return this.http.get(this.url+'similar-product.json');
  }

  getSingleProduct(id: any) {
    return this.http.get(this.url+'shoeProduct.json').pipe( map(
     (response: any) => {
      return response.find((p: any) => p.id == id);
     }));
  }

  searchProduct(value: string) {
    return this.http.get(this.url+'shoeProduct.json').pipe( map(
     (response: any) => {
      return response.filter((data: any) =>
        JSON.stringify(data).toLowerCase().includes(value.toLowerCase())
      )
     }));
  }

}
