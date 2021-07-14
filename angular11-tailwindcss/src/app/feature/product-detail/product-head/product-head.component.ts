import { productCardModal } from './../../../modal/product-card.modal';
import { HomeService } from './../../home/home.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-head',
  templateUrl: './product-head.component.html',
  styleUrls: ['./product-head.component.scss']
})
export class ProductHeadComponent implements OnInit {
  @Input() title: any;
  productCardData: productCardModal | any;
  product: any;
  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.singleCard();
    }, 100);
  }

  singleCard() {
    // this.title = this.activateRouter.snapshot.paramMap.get('title');
    this.homeService.getShoeProducts().subscribe(data => {
      this.product = data;
      this.product.forEach((element: any) => {
        if (element.title == this.title) {
          this.productCardData = element;
          
          // console.log(this.productCardData);
        }
      });
    });
  }
  

}
