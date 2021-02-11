import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianshipDialogComponent } from './guardianship-dialog.component';

describe('GuardianshipDialogComponent', () => {
  let component: GuardianshipDialogComponent;
  let fixture: ComponentFixture<GuardianshipDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianshipDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianshipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
