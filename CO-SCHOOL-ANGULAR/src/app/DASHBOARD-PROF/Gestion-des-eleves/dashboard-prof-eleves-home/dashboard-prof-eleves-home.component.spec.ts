import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfElevesHomeComponent } from './dashboard-prof-eleves-home.component';

describe('DashboardProfElevesHomeComponent', () => {
  let component: DashboardProfElevesHomeComponent;
  let fixture: ComponentFixture<DashboardProfElevesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfElevesHomeComponent]
    });
    fixture = TestBed.createComponent(DashboardProfElevesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
