import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOnPageComponent } from './sign-on-page.component';

describe('SignInPageComponent', () => {
  let component: SignOnPageComponent;
  let fixture: ComponentFixture<SignOnPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOnPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
