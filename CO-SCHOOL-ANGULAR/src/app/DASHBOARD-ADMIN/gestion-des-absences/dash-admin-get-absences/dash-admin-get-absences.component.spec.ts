import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminGetAbsencesComponent } from './dash-admin-get-absences.component';

describe('DashAdminGetAbsencesComponent', () => {
  let component: DashAdminGetAbsencesComponent;
  let fixture: ComponentFixture<DashAdminGetAbsencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminGetAbsencesComponent]
    });
    fixture = TestBed.createComponent(DashAdminGetAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
