import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminMenuResponsiveComponent } from './dash-admin-menu-responsive.component';

describe('DashAdminMenuResponsiveComponent', () => {
  let component: DashAdminMenuResponsiveComponent;
  let fixture: ComponentFixture<DashAdminMenuResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminMenuResponsiveComponent]
    });
    fixture = TestBed.createComponent(DashAdminMenuResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
