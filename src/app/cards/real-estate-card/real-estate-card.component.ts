import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-real-estate-card',
  templateUrl: './real-estate-card.component.html',
  styleUrls: ['./real-estate-card.component.scss']
})
export class RealEstateCardComponent implements OnInit {
  @Output() workCardEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  openPopup(event: string) {
    this.workCardEvent.emit(event);
  }
}
