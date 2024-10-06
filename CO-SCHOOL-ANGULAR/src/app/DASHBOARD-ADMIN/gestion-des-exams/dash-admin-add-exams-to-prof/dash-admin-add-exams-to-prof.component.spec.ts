import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminAddExamsToProfComponent } from './dash-admin-add-exams-to-prof.component';

describe('DashAdminAddExamsToProfComponent', () => {
  let component: DashAdminAddExamsToProfComponent;
  let fixture: ComponentFixture<DashAdminAddExamsToProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminAddExamsToProfComponent]
    });
    fixture = TestBed.createComponent(DashAdminAddExamsToProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
