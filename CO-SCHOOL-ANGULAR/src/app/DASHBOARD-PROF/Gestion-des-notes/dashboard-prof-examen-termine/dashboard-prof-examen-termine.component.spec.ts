import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfExamenTermineComponent } from './dashboard-prof-examen-termine.component';

describe('DashboardProfExamenTermineComponent', () => {
  let component: DashboardProfExamenTermineComponent;
  let fixture: ComponentFixture<DashboardProfExamenTermineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfExamenTermineComponent]
    });
    fixture = TestBed.createComponent(DashboardProfExamenTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
