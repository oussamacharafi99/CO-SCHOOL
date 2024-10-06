import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminInsertAbsenceComponent } from './dash-admin-insert-absence.component';

describe('DashAdminInsertAbsenceComponent', () => {
  let component: DashAdminInsertAbsenceComponent;
  let fixture: ComponentFixture<DashAdminInsertAbsenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminInsertAbsenceComponent]
    });
    fixture = TestBed.createComponent(DashAdminInsertAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
