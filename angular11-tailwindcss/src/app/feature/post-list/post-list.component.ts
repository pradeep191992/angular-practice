import { PostListService } from './service/post-list.service';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
@Injectable({ providedIn: 'root' })
export class PostListComponent implements OnInit {
  postData: any = [];
  removeData = false;
  pageSize = 1
  showSkeleton = true;
  postPageUrl = '';

  @ViewChild('removeContainerRef', {read: ViewContainerRef}) removeContainerRef!: ViewContainerRef;
  constructor(
    public postService: PostListService,
    public resolver: ComponentFactoryResolver,
    @Inject(DOCUMENT) public document: Document,
    public route: Router
    ) { }

  ngOnInit(): void {
    this.requestData(1, []);
  }
  

  requestData(pageSize:any, oldRecord: []){
    this.showSkeleton = true;
    this.postService.getPostData(pageSize).subscribe(((data: any) =>  {
      const newRecord = data;
      const oldRecords = oldRecord;
      this.postData = [...oldRecords, ...newRecord];
      this.showSkeleton = false;
    }))
  }

  onScrollDown() {
    this.pageSize ++;
    if (this.pageSize > 1) {
      this.requestData(this.pageSize, this.postData)
    }
  }

  singlePost(item: any){
    this.route.navigate([`/post/${item}`]);
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
