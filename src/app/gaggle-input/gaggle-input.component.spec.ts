import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaggleInputComponent } from './gaggle-input.component';

describe('GaggleInputComponent', () => {
  let component: GaggleInputComponent;
  let fixture: ComponentFixture<GaggleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaggleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaggleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
