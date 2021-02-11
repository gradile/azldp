import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grand-parents-card',
  templateUrl: './grand-parents-card.component.html',
  styleUrls: ['./grand-parents-card.component.scss']
})
export class GrandParentsCardComponent implements OnInit {
  @Output() workCardEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  openPopup(event: string) {
    this.workCardEvent.emit(event);
  }
}
