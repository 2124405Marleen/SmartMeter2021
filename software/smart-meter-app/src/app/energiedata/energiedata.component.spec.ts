import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiedataComponent } from './energiedata.component';

describe('EnergiedataComponent', () => {
  let component: EnergiedataComponent;
  let fixture: ComponentFixture<EnergiedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergiedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergiedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
