import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandParentsCardComponent } from './grand-parents-card.component';

describe('GrandParentsCardComponent', () => {
  let component: GrandParentsCardComponent;
  let fixture: ComponentFixture<GrandParentsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandParentsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandParentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
