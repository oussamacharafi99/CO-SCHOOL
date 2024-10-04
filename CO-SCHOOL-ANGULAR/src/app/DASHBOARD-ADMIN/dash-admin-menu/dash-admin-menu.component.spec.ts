import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminMenuComponent } from './dash-admin-menu.component';

describe('DashAdminMenuComponent', () => {
  let component: DashAdminMenuComponent;
  let fixture: ComponentFixture<DashAdminMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminMenuComponent]
    });
    fixture = TestBed.createComponent(DashAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
