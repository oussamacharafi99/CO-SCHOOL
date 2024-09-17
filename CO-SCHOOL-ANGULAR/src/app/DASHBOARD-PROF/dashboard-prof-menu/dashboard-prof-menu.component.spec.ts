import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfMenuComponent } from './dashboard-prof-menu.component';

describe('DashboardProfMenuComponent', () => {
  let component: DashboardProfMenuComponent;
  let fixture: ComponentFixture<DashboardProfMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfMenuComponent]
    });
    fixture = TestBed.createComponent(DashboardProfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
