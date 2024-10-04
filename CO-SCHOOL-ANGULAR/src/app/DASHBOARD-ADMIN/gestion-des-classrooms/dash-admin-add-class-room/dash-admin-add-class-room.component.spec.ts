import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminAddClassRoomComponent } from './dash-admin-add-class-room.component';

describe('DashAdminAddClassRoomComponent', () => {
  let component: DashAdminAddClassRoomComponent;
  let fixture: ComponentFixture<DashAdminAddClassRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminAddClassRoomComponent]
    });
    fixture = TestBed.createComponent(DashAdminAddClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
