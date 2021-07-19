import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.scss']
})
export class RemoveModalComponent implements OnInit {

  @Output() modalClose = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {

  }


openModal (myvalue: any){
  this.modalClose.emit(myvalue.innerText);
}

}

