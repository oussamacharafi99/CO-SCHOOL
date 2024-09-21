import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminExamCorrectionComponent } from './dashboard-admin-exam-correction.component';

describe('DashboardAdminExamCorrectionComponent', () => {
  let component: DashboardAdminExamCorrectionComponent;
  let fixture: ComponentFixture<DashboardAdminExamCorrectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdminExamCorrectionComponent]
    });
    fixture = TestBed.createComponent(DashboardAdminExamCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
