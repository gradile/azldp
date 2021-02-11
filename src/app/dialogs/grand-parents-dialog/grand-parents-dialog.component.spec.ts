import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandParentsDialogComponent } from './grand-parents-dialog.component';

describe('GrandParentsDialogComponent', () => {
  let component: GrandParentsDialogComponent;
  let fixture: ComponentFixture<GrandParentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandParentsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandParentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
