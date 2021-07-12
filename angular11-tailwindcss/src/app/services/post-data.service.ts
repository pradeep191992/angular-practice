import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  // post = 'https://jsonplaceholder.typicode.com/posts/1';
  // comments = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  // postID = 'https://jsonplaceholder.typicode.com/comments?postId=1';
  // user = 'https://jsonplaceholder.typicode.com/users';
  // allComments = 'https://jsonplaceholder.typicode.com/comments';
  // albums = 'https://jsonplaceholder.typicode.com/albums';
  // photos = 'https://jsonplaceholder.typicode.com/photos';
  // todo = 'https://jsonplaceholder.typicode.com/todos';

  constructor() { }

  getPost() {
    get of 
  }
}
