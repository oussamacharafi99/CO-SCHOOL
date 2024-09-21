import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfInsertElevesToExamenComponent } from './dashboard-prof-insert-eleves-to-examen.component';

describe('DashboardProfInsertElevesToExamenComponent', () => {
  let component: DashboardProfInsertElevesToExamenComponent;
  let fixture: ComponentFixture<DashboardProfInsertElevesToExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfInsertElevesToExamenComponent]
    });
    fixture = TestBed.createComponent(DashboardProfInsertElevesToExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
