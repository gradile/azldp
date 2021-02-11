import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wills-card',
  templateUrl: './wills-card.component.html',
  styleUrls: ['./wills-card.component.scss']
})
export class WillsCardComponent implements OnInit {
  @Output() workCardEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  openPopup(event: string) {
    this.workCardEvent.emit(event);
  }
}
