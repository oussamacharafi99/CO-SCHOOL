import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminAbsenceHomeComponent } from './dash-admin-absence-home.component';

describe('DashAdminAbsenceHomeComponent', () => {
  let component: DashAdminAbsenceHomeComponent;
  let fixture: ComponentFixture<DashAdminAbsenceHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminAbsenceHomeComponent]
    });
    fixture = TestBed.createComponent(DashAdminAbsenceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
