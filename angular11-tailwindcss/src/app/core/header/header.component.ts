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

  @ViewChild('myRef', { read: ViewContainerRef }) 
  myRef!: ViewContainerRef;

  constructor(
    public cartService: CartExpandService, 
    private resolver: ComponentFactoryResolver,
    public addtoCart: AddtoCartService,
    ) { }



  ngOnInit(): void {
    this.addtoCart.getData();
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
