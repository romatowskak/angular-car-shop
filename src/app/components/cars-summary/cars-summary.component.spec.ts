import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsSummaryComponent } from './cars-summary.component';

describe('CarsSummaryComponent', () => {
  let component: CarsSummaryComponent;
  let fixture: ComponentFixture<CarsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
