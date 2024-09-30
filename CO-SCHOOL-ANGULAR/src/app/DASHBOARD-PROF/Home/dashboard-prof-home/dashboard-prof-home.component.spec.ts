import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfHomeComponent } from './dashboard-prof-home.component';

describe('DashboardProfHomeComponent', () => {
  let component: DashboardProfHomeComponent;
  let fixture: ComponentFixture<DashboardProfHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfHomeComponent]
    });
    fixture = TestBed.createComponent(DashboardProfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
