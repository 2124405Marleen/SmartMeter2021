import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergieUsePastHourComponent } from './energie-use-past-hour.component';

describe('EnergieUsePastHourComponent', () => {
  let component: EnergieUsePastHourComponent;
  let fixture: ComponentFixture<EnergieUsePastHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergieUsePastHourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergieUsePastHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
