import { PostList } from './modal/post-list.modal';
import { PostListService } from './service/post-list.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, AfterViewInit {
  postData: any;
  constructor(public postService: PostListService) { }

  ngOnInit(): void {
    
  }
  
  public get value() : any {
    return  this.ngAfterViewInit();
  }
  
  ngAfterViewInit () {
    this.postService.getPostData().subscribe((data =>  {
      this.postData = data;
      console.log(this.postData);
    }))
  }
}
