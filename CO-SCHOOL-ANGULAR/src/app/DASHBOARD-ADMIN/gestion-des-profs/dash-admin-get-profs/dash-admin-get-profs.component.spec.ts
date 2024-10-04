import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminGetProfsComponent } from './dash-admin-get-profs.component';

describe('DashAdminGetProfsComponent', () => {
  let component: DashAdminGetProfsComponent;
  let fixture: ComponentFixture<DashAdminGetProfsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminGetProfsComponent]
    });
    fixture = TestBed.createComponent(DashAdminGetProfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
