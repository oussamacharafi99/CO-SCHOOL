import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfAddExamenComponent } from './dashboard-prof-add-examen.component';

describe('DashboardProfAddExamenComponent', () => {
  let component: DashboardProfAddExamenComponent;
  let fixture: ComponentFixture<DashboardProfAddExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfAddExamenComponent]
    });
    fixture = TestBed.createComponent(DashboardProfAddExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
