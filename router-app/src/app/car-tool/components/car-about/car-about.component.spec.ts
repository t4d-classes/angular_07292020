import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAboutComponent } from './car-about.component';

describe('CarAboutComponent', () => {
  let component: CarAboutComponent;
  let fixture: ComponentFixture<CarAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
