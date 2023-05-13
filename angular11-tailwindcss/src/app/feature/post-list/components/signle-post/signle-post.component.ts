import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signle-post',
  templateUrl: './signle-post.component.html',
  styleUrls: ['./signle-post.component.scss']
})
export class SignlePostComponent implements OnInit {

  @Input() singleItem!: any;
  @Input() index!: any;
  @Output() removePost = new EventEmitter();
  @Output() singlePost = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  removepost(event:any){
    this.removePost.emit(event);
  }
  singlePostClicked(event: any){
    this.singlePost.emit(event);
  }
}
