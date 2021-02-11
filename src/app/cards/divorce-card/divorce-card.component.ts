import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-divorce-card',
  templateUrl: './divorce-card.component.html',
  styleUrls: ['./divorce-card.component.scss']
})
export class DivorceCardComponent implements OnInit {
 
  @Output() workCardEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  openPopup(event:string) {
    this.workCardEvent.emit(event);
  }
}
