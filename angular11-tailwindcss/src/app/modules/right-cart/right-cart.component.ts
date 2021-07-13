import { CartExpandService } from '../../core/services/services/cart-expand.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-cart',
  templateUrl: './right-cart.component.html',
  styleUrls: ['./right-cart.component.scss']
})
export class RightCartComponent implements OnInit {

  

  constructor(public cartService: CartExpandService) { }

  ngOnInit(): void {
  }

}
