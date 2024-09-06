import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEleveNotesComponent } from './dashboard-eleve-notes.component';

describe('DashboardEleveNotesComponent', () => {
  let component: DashboardEleveNotesComponent;
  let fixture: ComponentFixture<DashboardEleveNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEleveNotesComponent]
    });
    fixture = TestBed.createComponent(DashboardEleveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
