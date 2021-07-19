import { PostListService } from './service/post-list.service';
import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
@Injectable({ providedIn: 'root' })
export class PostListComponent implements OnInit, AfterViewInit {
  postData: any;
  removeData = false;

  @ViewChild('removeContainerRef', {read: ViewContainerRef}) removeContainerRef!: ViewContainerRef;
  constructor(
    public postService: PostListService,
    public resolver: ComponentFactoryResolver,
    @Inject(DOCUMENT) public document: Document,
    ) { }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit () {
    this.postService.getPostData().subscribe((data =>  {
      this.postData = data;
    }))
  }

  removePost(i: any) {
    this.lazyRemove(i);   
  }

  async lazyRemove(i: any) {
    this.removeContainerRef.clear();
    const {RemoveModalComponent} = await import('./../../modules/remove-modal/remove-modal.component');
    let component = this.removeContainerRef.createComponent(this.resolver.resolveComponentFactory(RemoveModalComponent));
    component.instance.modalClose.subscribe(data => {
      if (data == 'Confirm') {
        this.postData.splice(i, 1); 
        console.log(this.postData) 
      } 
      document.body.querySelector('#modal_overlay')?.remove();
    });
  }

}
