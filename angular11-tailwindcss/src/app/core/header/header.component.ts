import { productCardModal } from './../../modal/product-card.modal';
import { HomeService } from './../../feature/home/home.service';
import { AddtoCartService } from './../services/addto-cart.service';
import { CartExpandService } from './../services/cart-expand.service';
import { headerConst } from './constants/header.constant';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  headerConst = headerConst;
  hideProductList = false;

  @ViewChild('myRef', { read: ViewContainerRef }) 
  myRef!: ViewContainerRef;

  @ViewChild ('searchFrom', {read: ViewContainerRef} ) searchField!: ViewContainerRef;
  mySearch: productCardModal | any;
  constructor(
    public cartService: CartExpandService, 
    private resolver: ComponentFactoryResolver,
    public addtoCart: AddtoCartService,
    public homeService: HomeService,
    ) { }



  ngOnInit(): void {
    this.addtoCart.getData();
    // this.mySearch =
  }
  searchProduct(search: any) {
    this.homeService.searchProduct(search.value).subscribe(data => {
      this.hideProductList = true;
      console.log(data);
      this.mySearch = data;
    });
  }
  hideList() {
    this.searchField.element.nativeElement.value = '';
    this.hideProductList = false;
  }

  loadmodule() {
    this.lazyLoadComp();
    setTimeout(() => {
      this.cartService.toggle();
    }, 100);
  }

  ngAfterViewInit(): void {
    // this.lazyLoadComp();
  }

  async lazyLoadComp () {
    this.myRef.clear();
    const {RightCartComponent} = await import('./../../modules/right-cart/right-cart.component');
    this.myRef.createComponent(this.resolver.resolveComponentFactory(RightCartComponent));
  }
  
}
