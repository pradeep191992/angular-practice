import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = "./../.";
  constructor(private http: HttpClient) { }

  getShoeProducts() {
    return this.http.get('./../assets/dummyData/shoeProduct.json');
  }
  getProducts() {
    return this.http.get('./../assets/dummyData/product.json');
  }

}
