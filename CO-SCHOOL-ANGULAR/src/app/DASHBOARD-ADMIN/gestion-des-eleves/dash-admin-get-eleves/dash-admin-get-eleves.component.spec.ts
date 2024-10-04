import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminGetElevesComponent } from './dash-admin-get-eleves.component';

describe('DashAdminGetElevesComponent', () => {
  let component: DashAdminGetElevesComponent;
  let fixture: ComponentFixture<DashAdminGetElevesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminGetElevesComponent]
    });
    fixture = TestBed.createComponent(DashAdminGetElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
