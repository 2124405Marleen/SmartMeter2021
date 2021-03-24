import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsgridComponent } from './statsgrid.component';

describe('StatsgridComponent', () => {
  let component: StatsgridComponent;
  let fixture: ComponentFixture<StatsgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
