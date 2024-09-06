import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEleveCalendarExamComponent } from './dashboard-eleve-calendar-exam.component';

describe('DashboardEleveCalendarExamComponent', () => {
  let component: DashboardEleveCalendarExamComponent;
  let fixture: ComponentFixture<DashboardEleveCalendarExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEleveCalendarExamComponent]
    });
    fixture = TestBed.createComponent(DashboardEleveCalendarExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
