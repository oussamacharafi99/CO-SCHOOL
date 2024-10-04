import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminClassRoomHomeComponent } from './dash-admin-class-room-home.component';

describe('DashAdminClassRoomHomeComponent', () => {
  let component: DashAdminClassRoomHomeComponent;
  let fixture: ComponentFixture<DashAdminClassRoomHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminClassRoomHomeComponent]
    });
    fixture = TestBed.createComponent(DashAdminClassRoomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
