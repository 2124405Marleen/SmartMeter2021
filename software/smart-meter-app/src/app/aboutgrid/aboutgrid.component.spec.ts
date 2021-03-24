import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutgridComponent } from './aboutgrid.component';

describe('AboutgridComponent', () => {
  let component: AboutgridComponent;
  let fixture: ComponentFixture<AboutgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
