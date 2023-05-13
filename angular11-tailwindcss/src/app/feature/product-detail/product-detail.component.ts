import { productCardModal } from './../../modal/product-card.modal';
import { HomeService } from './../home/home.service';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, AfterViewInit {

  productData: any;

  @ViewChild('productRef', {read: ViewContainerRef}) productRefs: ViewContainerRef | any;
  
  product: productCardModal | any;
  id: any;
  productCardData: any;
  productId: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private homeService: HomeService,
    public activateRouter: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.activateRouter.queryParamMap.subscribe(param => {
      this.productId = param.get('id') || '';
      this.homeService.getSingleProduct(this.productId).subscribe((data: any) => {
        this.product = data; 
      });  
    })
  }

  loadMore () {
    this.homeService.getProducts().subscribe((data:any) => {
      this.productData = data.shoeProducts;
      this.productData?.forEach((ele: any) => {
        this.productLazyLoad(ele);
      });
    })
  }

  ngAfterViewInit() {
    this.loadMore ();
  }

  async productLazyLoad(ele: any) {
    this.productRefs.clear();
    const {ProductCardComponent} = await import('./../../modules/product-card/product-card.component');
    let productCard = this.productRefs.createComponent(this.resolver.resolveComponentFactory(ProductCardComponent));
    productCard.instance.item = ele
  }
}
