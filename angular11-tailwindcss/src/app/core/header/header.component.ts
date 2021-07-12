import { headerConst } from './constants/header.constant';
import { CartExpandService } from './../../services/cart-expand.service';
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
    ) { }



  ngOnInit(): void {
  }

  // loadmodule() {
  //   if (this.loadComp) {
  //     this.lazyLoadComp();
  //   }
  //   this.cartService.toggle();
  // }

  ngAfterViewInit(): void {
    this.lazyLoadComp();
  }

  async lazyLoadComp () {
    this.myRef.clear();
    const {RightCartComponent} = await import('./../../modules/right-cart/right-cart.component');
    this.myRef.createComponent(this.resolver.resolveComponentFactory(RightCartComponent));
  }
  
}
