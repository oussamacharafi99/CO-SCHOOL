import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfNormalExamensComponent } from './dashboard-prof-normal-examens.component';

describe('DashboardProfNormalExamensComponent', () => {
  let component: DashboardProfNormalExamensComponent;
  let fixture: ComponentFixture<DashboardProfNormalExamensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfNormalExamensComponent]
    });
    fixture = TestBed.createComponent(DashboardProfNormalExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
