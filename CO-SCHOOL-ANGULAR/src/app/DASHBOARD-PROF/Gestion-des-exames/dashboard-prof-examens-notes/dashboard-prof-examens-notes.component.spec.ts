import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfExamensNotesComponent } from './dashboard-prof-examens-notes.component';

describe('DashboardProfExamensNotesComponent', () => {
  let component: DashboardProfExamensNotesComponent;
  let fixture: ComponentFixture<DashboardProfExamensNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfExamensNotesComponent]
    });
    fixture = TestBed.createComponent(DashboardProfExamensNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
