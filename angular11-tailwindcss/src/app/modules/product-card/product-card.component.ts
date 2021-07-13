import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  title = '';
  image = '';
  price = '';
  // @Input() cardData : any | undefined;
  
  @Input() element : any | undefined;

  @Output() dataServices = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log('Data Emit', this.element)
    // this.cardData?.forEach((ele: any) => {
    //   this.image = ele.featureImg;
    //   this.title = ele.title;
    //   this.price = ele.price;
    //   // console.log(this.title)
    // });
  }

  getCardData () {
    this.dataServices.emit('Data Form Card Component');
  }

}
