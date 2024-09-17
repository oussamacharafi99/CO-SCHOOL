import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfHeaderComponent } from './dashboard-prof-header.component';

describe('DashboardProfHeaderComponent', () => {
  let component: DashboardProfHeaderComponent;
  let fixture: ComponentFixture<DashboardProfHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfHeaderComponent]
    });
    fixture = TestBed.createComponent(DashboardProfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
