import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateDialogComponent } from './real-estate-dialog.component';

describe('RealEstateDialogComponent', () => {
  let component: RealEstateDialogComponent;
  let fixture: ComponentFixture<RealEstateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
