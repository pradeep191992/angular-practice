import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartExpandService {
  cartOpen = false;
  isOpen = false;

  constructor() { }

  toggle() {
    this.cartOpen = !this.cartOpen;
  }
  menuOpen() {
    this.isOpen = !this.isOpen;
  }
}
