import { headerConst } from './constants/header.constant';
import { CartExpandService } from './../../services/cart-expand.service';
import { Component, OnChanges, OnInit, SimpleChanges, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  headerConst = headerConst;

  @ViewChild('myRef', { read: ViewContainerRef }) 
  loadComp!: ViewContainerRef;

  constructor(
    public cartService: CartExpandService, 
    private viewRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    ) { }



  ngOnInit(): void {
  }

  

  ngOnChanges(changes: SimpleChanges): void {
    // debugger
    // this.lazyLoadComp();
  }

  async lazyLoadComp () {
    this.loadComp.clear();
    const {RightCartComponent} = await import('./../../modules/right-cart/right-cart.component');
    this.loadComp.createComponent(this.resolver.resolveComponentFactory(RightCartComponent));
    this.cartService.toggle()
  }
  
}
