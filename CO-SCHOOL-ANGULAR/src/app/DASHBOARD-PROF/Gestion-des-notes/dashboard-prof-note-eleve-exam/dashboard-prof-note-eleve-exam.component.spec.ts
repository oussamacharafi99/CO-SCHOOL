import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfNoteEleveExamComponent } from './dashboard-prof-note-eleve-exam.component';

describe('DashboardProfNoteEleveExamComponent', () => {
  let component: DashboardProfNoteEleveExamComponent;
  let fixture: ComponentFixture<DashboardProfNoteEleveExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfNoteEleveExamComponent]
    });
    fixture = TestBed.createComponent(DashboardProfNoteEleveExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
