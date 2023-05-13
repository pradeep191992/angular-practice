
import { HomeService } from './home.service';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  productCard: any;
  shoeProduct: any = [];
  searchBrandWise: any;

  open = false;

  @ViewChild('productsRef', {read: ViewContainerRef}) productsRefs!: ViewContainerRef;
  constructor(
    private homeService: HomeService,
    private resolver: ComponentFactoryResolver,
    ) { }
  
  ngOnInit(): void {
    this.homeService.getShoeProducts().subscribe((data: any) => {
      this.shoeProduct = data.shoeProducts;
      const filterdData = data.shoeProducts.reduce((mp1:any, obj:any) => mp1.set(obj.brand, obj), new Map())
      this.searchBrandWise = [...filterdData.values()]
      console.log(this.searchBrandWise)
    })
  }

  openToggle() {
    this.open = !this.open;
  }

  ngAfterViewInit() {

      // this.homeService.getProducts().subscribe((data: any) => {
      //   this.productCard = data.shoe_products;
      //   this.productCard?.forEach((ele: any) => {
      //     this.getProduct(ele);
      //   });
      // })
  }

  async getProduct(ele: any) {
    const {ProductCardComponent} = await import('./../../modules/product-card/product-card.component');
    let productData = this.productsRefs.createComponent(this.resolver.resolveComponentFactory(ProductCardComponent));
    productData.instance.item = ele;
  }


  brandFilter(event: any){
    event.onchange = () => {
      // alert(this.value);
      this.homeService.searchProduct(event.value).subscribe((data: any) => {
        console.log(event.value);
        this.shoeProduct = data;
        console.log(data);
      })
    };
    // console.log(event);
  }
}
