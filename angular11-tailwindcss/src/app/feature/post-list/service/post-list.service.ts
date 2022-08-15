import { PostList } from './../modal/post-list.modal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostListService {
  // url = 'https://jsonplaceholder.typicode.com/posts?userId=10';
  url = 'https://jsonplaceholder.typicode.com/photos?albumId=';
  singlePostUrl = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(
    private http: HttpClient,
  ) { }

  getPostData(pageSize: number) {
    return this.http.get(this.url+pageSize);
  }

  getSinglePost(id: number) {
    return this.http.get(this.singlePostUrl+id);
  }
}
