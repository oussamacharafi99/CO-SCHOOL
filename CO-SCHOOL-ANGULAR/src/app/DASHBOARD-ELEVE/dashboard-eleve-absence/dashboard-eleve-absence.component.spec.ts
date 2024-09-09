import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEleveAbsenceComponent } from './dashboard-eleve-absence.component';

describe('DashboardEleveAbsenceComponent', () => {
  let component: DashboardEleveAbsenceComponent;
  let fixture: ComponentFixture<DashboardEleveAbsenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEleveAbsenceComponent]
    });
    fixture = TestBed.createComponent(DashboardEleveAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
