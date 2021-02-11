import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSupportCardComponent } from './child-support-card.component';

describe('ChildSupportCardComponent', () => {
  let component: ChildSupportCardComponent;
  let fixture: ComponentFixture<ChildSupportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSupportCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSupportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
