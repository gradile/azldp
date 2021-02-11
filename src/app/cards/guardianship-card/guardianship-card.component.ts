import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-guardianship-card',
  templateUrl: './guardianship-card.component.html',
  styleUrls: ['./guardianship-card.component.scss']
})
export class GuardianshipCardComponent implements OnInit {
  @Output() workCardEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  openPopup(event: string) {
    this.workCardEvent.emit(event);
  }
}
