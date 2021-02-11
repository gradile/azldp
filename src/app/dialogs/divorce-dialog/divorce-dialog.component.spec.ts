import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorceDialogComponent } from './divorce-dialog.component';

describe('DivorceDialogComponent', () => {
  let component: DivorceDialogComponent;
  let fixture: ComponentFixture<DivorceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivorceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
