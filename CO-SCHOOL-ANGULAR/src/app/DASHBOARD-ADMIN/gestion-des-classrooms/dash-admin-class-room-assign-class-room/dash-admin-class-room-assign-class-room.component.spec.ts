import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminClassRoomAssignClassRoomComponent } from './dash-admin-class-room-assign-class-room.component';

describe('DashAdminClassRoomAssignClassRoomComponent', () => {
  let component: DashAdminClassRoomAssignClassRoomComponent;
  let fixture: ComponentFixture<DashAdminClassRoomAssignClassRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminClassRoomAssignClassRoomComponent]
    });
    fixture = TestBed.createComponent(DashAdminClassRoomAssignClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
