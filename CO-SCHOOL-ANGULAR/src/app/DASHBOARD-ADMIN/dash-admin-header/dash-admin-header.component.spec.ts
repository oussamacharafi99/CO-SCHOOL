import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminHeaderComponent } from './dash-admin-header.component';

describe('DashAdminHeaderComponent', () => {
  let component: DashAdminHeaderComponent;
  let fixture: ComponentFixture<DashAdminHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminHeaderComponent]
    });
    fixture = TestBed.createComponent(DashAdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
