import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-support-card',
  templateUrl: './child-support-card.component.html',
  styleUrls: ['./child-support-card.component.scss']
})
export class ChildSupportCardComponent implements OnInit {

  @Output() workCardEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  openPopup(event:string) {
    this.workCardEvent.emit(event);
    console.log("emmitted", event);
  }
}
