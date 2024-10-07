import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminGetExamsComponent } from './dash-admin-get-exams.component';

describe('DashAdminGetExamsComponent', () => {
  let component: DashAdminGetExamsComponent;
  let fixture: ComponentFixture<DashAdminGetExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminGetExamsComponent]
    });
    fixture = TestBed.createComponent(DashAdminGetExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
