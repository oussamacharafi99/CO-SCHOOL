import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminEncoureCorrectionComponent } from './dashboard-admin-encoure-correction.component';

describe('DashboardAdminEncoureCorrectionComponent', () => {
  let component: DashboardAdminEncoureCorrectionComponent;
  let fixture: ComponentFixture<DashboardAdminEncoureCorrectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdminEncoureCorrectionComponent]
    });
    fixture = TestBed.createComponent(DashboardAdminEncoureCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
