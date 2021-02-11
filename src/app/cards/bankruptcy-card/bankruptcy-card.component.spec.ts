import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankruptcyCardComponent } from './bankruptcy-card.component';

describe('BankruptcyCardComponent', () => {
  let component: BankruptcyCardComponent;
  let fixture: ComponentFixture<BankruptcyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankruptcyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankruptcyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
