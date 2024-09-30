import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminEleveExamenComponent } from './dashboard-admin-eleve-examen.component';

describe('DashboardAdminEleveExamenComponent', () => {
  let component: DashboardAdminEleveExamenComponent;
  let fixture: ComponentFixture<DashboardAdminEleveExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdminEleveExamenComponent]
    });
    fixture = TestBed.createComponent(DashboardAdminEleveExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
