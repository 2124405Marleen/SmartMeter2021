import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskedHoursComponent } from './asked-hours.component';

describe('AskedHoursComponent', () => {
  let component: AskedHoursComponent;
  let fixture: ComponentFixture<AskedHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskedHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskedHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
