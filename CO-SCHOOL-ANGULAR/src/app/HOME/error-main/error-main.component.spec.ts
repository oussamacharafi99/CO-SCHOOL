import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMainComponent } from './error-main.component';

describe('ErrorMainComponent', () => {
  let component: ErrorMainComponent;
  let fixture: ComponentFixture<ErrorMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMainComponent]
    });
    fixture = TestBed.createComponent(ErrorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
