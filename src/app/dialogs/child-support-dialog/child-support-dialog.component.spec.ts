import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSupportDialogComponent } from './child-support-dialog.component';

describe('ChildSupportDialogComponent', () => {
  let component: ChildSupportDialogComponent;
  let fixture: ComponentFixture<ChildSupportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSupportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSupportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
