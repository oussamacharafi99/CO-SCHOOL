import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfElevesComponent } from './dashboard-prof-eleves.component';

describe('DashboardProfElevesComponent', () => {
  let component: DashboardProfElevesComponent;
  let fixture: ComponentFixture<DashboardProfElevesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfElevesComponent]
    });
    fixture = TestBed.createComponent(DashboardProfElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
