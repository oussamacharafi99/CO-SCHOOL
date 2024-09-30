import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfExamenComponent } from './dashboard-prof-examen.component';

describe('DashboardProfExamenComponent', () => {
  let component: DashboardProfExamenComponent;
  let fixture: ComponentFixture<DashboardProfExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfExamenComponent]
    });
    fixture = TestBed.createComponent(DashboardProfExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
