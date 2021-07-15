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

  constructor(
    private resolver: ComponentFactoryResolver,
    private homeService: HomeService,
    public activateRouter: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((params: Params) => { 
      let id = parseInt(params.get('id'));
      this.id = id
      this.homeService.getSingleProduct(this.id).subscribe(data => {
        this.product = data.find((p:any) => p.id == this.id); 
      });   
    });
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
