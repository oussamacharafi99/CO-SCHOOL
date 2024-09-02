import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCoursesMainComponent } from './our-courses-main.component';

describe('OurCoursesMainComponent', () => {
  let component: OurCoursesMainComponent;
  let fixture: ComponentFixture<OurCoursesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurCoursesMainComponent]
    });
    fixture = TestBed.createComponent(OurCoursesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
