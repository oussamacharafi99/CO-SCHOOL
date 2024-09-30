import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExamNotAssignComponent } from './dashboard-exam-not-assign.component';

describe('DashboardExamNotAssignComponent', () => {
  let component: DashboardExamNotAssignComponent;
  let fixture: ComponentFixture<DashboardExamNotAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardExamNotAssignComponent]
    });
    fixture = TestBed.createComponent(DashboardExamNotAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
