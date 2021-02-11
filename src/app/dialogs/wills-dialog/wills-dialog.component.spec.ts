import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillsDialogComponent } from './wills-dialog.component';

describe('WillsDialogComponent', () => {
  let component: WillsDialogComponent;
  let fixture: ComponentFixture<WillsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
