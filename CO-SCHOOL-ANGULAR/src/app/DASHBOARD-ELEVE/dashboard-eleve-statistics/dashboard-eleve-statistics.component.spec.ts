import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEleveStatisticsComponent } from './dashboard-eleve-statistics.component';

describe('DashboardEleveStatisticsComponent', () => {
  let component: DashboardEleveStatisticsComponent;
  let fixture: ComponentFixture<DashboardEleveStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEleveStatisticsComponent]
    });
    fixture = TestBed.createComponent(DashboardEleveStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
