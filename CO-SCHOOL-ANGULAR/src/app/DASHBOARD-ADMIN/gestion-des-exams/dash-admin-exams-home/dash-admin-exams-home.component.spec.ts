import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminExamsHomeComponent } from './dash-admin-exams-home.component';

describe('DashAdminExamsHomeComponent', () => {
  let component: DashAdminExamsHomeComponent;
  let fixture: ComponentFixture<DashAdminExamsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminExamsHomeComponent]
    });
    fixture = TestBed.createComponent(DashAdminExamsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
