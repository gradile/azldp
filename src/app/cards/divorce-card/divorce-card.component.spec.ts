import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorceCardComponent } from './divorce-card.component';

describe('DivorceCardComponent', () => {
  let component: DivorceCardComponent;
  let fixture: ComponentFixture<DivorceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivorceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
