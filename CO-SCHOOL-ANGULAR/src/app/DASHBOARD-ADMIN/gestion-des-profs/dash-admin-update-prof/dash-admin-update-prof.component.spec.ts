import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminUpdateProfComponent } from './dash-admin-update-prof.component';

describe('DashAdminUpdateProfComponent', () => {
  let component: DashAdminUpdateProfComponent;
  let fixture: ComponentFixture<DashAdminUpdateProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminUpdateProfComponent]
    });
    fixture = TestBed.createComponent(DashAdminUpdateProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
