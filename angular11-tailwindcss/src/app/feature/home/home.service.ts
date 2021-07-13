import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = "./../assets/dummyData/";
  constructor(private http: HttpClient) { }

  getShoeProducts(): Observable<any> {
    return this.http.get(this.url+'shoeProduct.json');
  }
  getProducts() {
    return this.http.get(this.url+'product.json');
  }

}
