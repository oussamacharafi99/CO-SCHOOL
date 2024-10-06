import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEleveMenuResponsiveComponent } from './dash-eleve-menu-responsive.component';

describe('DashEleveMenuResponsiveComponent', () => {
  let component: DashEleveMenuResponsiveComponent;
  let fixture: ComponentFixture<DashEleveMenuResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashEleveMenuResponsiveComponent]
    });
    fixture = TestBed.createComponent(DashEleveMenuResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
