import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminGetClassRoomsComponent } from './dash-admin-get-class-rooms.component';

describe('DashAdminGetClassRoomsComponent', () => {
  let component: DashAdminGetClassRoomsComponent;
  let fixture: ComponentFixture<DashAdminGetClassRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminGetClassRoomsComponent]
    });
    fixture = TestBed.createComponent(DashAdminGetClassRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
