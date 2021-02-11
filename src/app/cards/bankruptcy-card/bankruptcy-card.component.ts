import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bankruptcy-card',
  templateUrl: './bankruptcy-card.component.html',
  styleUrls: ['./bankruptcy-card.component.scss']
})
export class BankruptcyCardComponent {

  @Output() workCardEvent = new EventEmitter<string>();
  
  constructor() { }


  openPopup(event: string) {
    this.workCardEvent.emit(event);
    console.log("emmitted", event);
  }
}
