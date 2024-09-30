import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfGestionComponent } from './dashboard-prof-gestion.component';

describe('DashboardProfGestionComponent', () => {
  let component: DashboardProfGestionComponent;
  let fixture: ComponentFixture<DashboardProfGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfGestionComponent]
    });
    fixture = TestBed.createComponent(DashboardProfGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
