import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostListComponent } from './post-list.component';
import { SignlePostComponent } from './components/signle-post/signle-post.component';


@NgModule({
  declarations: [
    PostListComponent,
    SignlePostComponent
  ],
  imports: [
    CommonModule,
    PostListRoutingModule,
    InfiniteScrollModule
  ]
})
export class PostListModule { }
