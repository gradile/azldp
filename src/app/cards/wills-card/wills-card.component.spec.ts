import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillsCardComponent } from './wills-card.component';

describe('WillsCardComponent', () => {
  let component: WillsCardComponent;
  let fixture: ComponentFixture<WillsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
