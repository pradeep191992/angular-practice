import { productCardModal } from './../../modal/product-card.modal';
import { HomeService } from './../home/home.service';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  title: any;
  productCardData: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private homeService: HomeService,
    public activateRouter: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    // this.sub = this.activateRouter.paramMap.subscribe(params => { 
    //   // console.log(params);
    //   this.title = params.get('id');
    //   this.homeService.getSingleProduct(this.title);
    //   //  let products=this.homeService.getProducts();
    //   //  this.product=products.find((p:any) => p.title==this.title);    
    // });


    // this.title = this.activateRouter.snapshot.paramMap.get('title');
    // // this.homeService.getSingleProduct(this.title);
    // this.homeService.getShoeProducts().subscribe(data => {
    //   this.product = data;
    //   this.product.forEach((element: any) => {
    //     if (element.title == this.title) {
    //       this.productCardData = element;
          
    //       console.log(this.productCardData);
    //     }
    //   });
    // });
    


    // this.homeService.getProducts();
    // this.product=products.find((p: { title: any; }) => p.title==this.title);


    // this.activateRouter.params.subscribe(params => {
    //   this.productData = params.title
    //   console.log(this.productData);
    // })
    setTimeout(() => {
      this.singleCard();
    }, 100);
  }

  singleCard() {
    this.title = this.activateRouter.snapshot.paramMap.get('title');
    // this.productCardData = this.homeService.getShoeProducts().subscribe(data => {
    //   this.product = data;
    //   this.product.forEach((element: any) => {
    //     if (element.title == this.title) {
    //       return element;
          
    //       // console.log(this.productCardData);
    //     }
    //   });
    // });
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
