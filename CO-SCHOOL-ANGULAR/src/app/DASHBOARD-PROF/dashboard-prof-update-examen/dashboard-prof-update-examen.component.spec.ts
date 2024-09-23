import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfUpdateExamenComponent } from './dashboard-prof-update-examen.component';

describe('DashboardProfUpdateExamenComponent', () => {
  let component: DashboardProfUpdateExamenComponent;
  let fixture: ComponentFixture<DashboardProfUpdateExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfUpdateExamenComponent]
    });
    fixture = TestBed.createComponent(DashboardProfUpdateExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
