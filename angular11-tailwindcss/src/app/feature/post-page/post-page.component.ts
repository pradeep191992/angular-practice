import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './service/post.service';
import { PostModal } from './constants/post.modal';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  orderId = '';
  showSkeleton = true;
  siglePost!: PostModal;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.orderId = param.get('id') || '';
      this.fetchOrderInfo();
    })
  }
  fetchOrderInfo() {
    this.postService.getSinglePost(this.orderId).subscribe((post) => {
      this.showSkeleton = true;
      this.siglePost = post as PostModal;
      this.showSkeleton = false;
      console.log(post);
    });
  }
}
