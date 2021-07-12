import { HomeService } from './../home/home.service';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, AfterViewInit {

  productData: any;

  @ViewChild('productRef', {read: ViewContainerRef}) productRefs: ViewContainerRef | any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private homeService: HomeService,
    ) { }

  ngOnInit(): void {

  }

  loadMore () {
    this.homeService.getProducts().subscribe((data) => {
      this.productData = data;
      this.productData?.forEach((ele: any) => {
        this.productLazyLoad(ele);
      });
    })
  }

  ngAfterViewInit() {
    
  }

  async productLazyLoad(ele: any) {
    this.productRefs.clear();
    const {ProductCardComponent} = await import('./../../modules/product-card/product-card.component');
    let productCard = this.productRefs.createComponent(this.resolver.resolveComponentFactory(ProductCardComponent));
    productCard.instance.element = ele
  }
}
