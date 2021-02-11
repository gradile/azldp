import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankruptcyDialogComponent } from './bankruptcy-dialog.component';

describe('BankruptcyDialogComponent', () => {
  let component: BankruptcyDialogComponent;
  let fixture: ComponentFixture<BankruptcyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankruptcyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankruptcyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
