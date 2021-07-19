
import { HomeService } from './home.service';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  productCard: any;
  shoeProduct: any;
  searchBrandWise: any;

  open = false;

  @ViewChild('productsRef', {read: ViewContainerRef}) productsRefs!: ViewContainerRef;
  constructor(
    private homeService: HomeService,
    private resolver: ComponentFactoryResolver,
    ) { }
  
  ngOnInit(): void {
    this.homeService.getShoeProducts().subscribe((data) => {
      this.shoeProduct = data;
      this.searchBrandWise = data;
      console.log(this.searchBrandWise)
      // this.searchBrandWise = this.uniqBy(this.searchBrandWise, JSON.stringify)
    })
  }

  // uniqBy(a, key) {

  // }

  openToggle() {
    this.open = !this.open;
  }

  ngAfterViewInit() {

    this.homeService.getProducts().subscribe((data) => {
      this.productCard = data;
      this.productCard?.forEach((ele: any) => {
        this.getProduct(ele);
      });
    })
  }

  async getProduct(ele: any) {
    const {ProductCardComponent} = await import('./../../modules/product-card/product-card.component');
    let productData = this.productsRefs.createComponent(this.resolver.resolveComponentFactory(ProductCardComponent));
    productData.instance.element = ele;
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
