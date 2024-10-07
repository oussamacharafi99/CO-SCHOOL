import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProfMenuResponsiveComponent } from './dash-prof-menu-responsive.component';

describe('DashProfMenuResponsiveComponent', () => {
  let component: DashProfMenuResponsiveComponent;
  let fixture: ComponentFixture<DashProfMenuResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashProfMenuResponsiveComponent]
    });
    fixture = TestBed.createComponent(DashProfMenuResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
