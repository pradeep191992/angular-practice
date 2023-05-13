import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // url = 'https://jsonplaceholder.typicode.com/posts?userId=10';
  url = 'https://jsonplaceholder.typicode.com/photos?albumId=';
  singlePostUrl = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(
    private http: HttpClient,
  ) { }


  getSinglePost(id: any) {
    return this.http.get(this.singlePostUrl+id);
  }
}
