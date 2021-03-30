import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureShowComponent } from './temperature-show.component';

describe('TemperatureShowComponent', () => {
  let component: TemperatureShowComponent;
  let fixture: ComponentFixture<TemperatureShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
