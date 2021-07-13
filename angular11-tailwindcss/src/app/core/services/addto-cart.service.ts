import { productCardModal } from './../../modal/product-card.modal';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtoCartService {
  arrayItem: string[] = [];
  addCartObj: any = [];
  constructor() { }

  
  getData() {
    let localStorages = localStorage.getItem('cartValues');
    if (localStorages !== null) {
      this.arrayItem = JSON.parse(localStorages);
    }else{
      this.arrayItem = []
    }
  }

  addToCart(event: productCardModal) {
    const id = event?.id;
    const brand = event?.title;
    const proImage = event?.featureImg;
    const proPrice = event?.price;
    this.addCartObj = {'id': id, 'brandName': brand, 'proImage': proImage, 'proPrice': proPrice };
    let local = localStorage.getItem('cartValues');
    if (local == null){
      this.arrayItem.push(this.addCartObj);
      localStorage.setItem('cartValues', JSON.stringify(this.arrayItem));
    }
    else {
      this.arrayItem = JSON.parse(local);
      this.arrayItem.push(this.addCartObj);
      localStorage.setItem('cartValues', JSON.stringify(this.arrayItem));
    }
    this.getData();
  }

  removeItem(i: number) {
    const local = localStorage.getItem('cartValues');
    if (local !== null) {
      this.arrayItem = JSON.parse(local);
      this.arrayItem.splice(i, 1);
      localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
      this.getData();
    }
  }

  // clearStorage() {
  //   if (confirm('Do You Want To clear All data?')) {
  //     localStorage.clear();
  //     this.getData();
  //   }
  // }
}
