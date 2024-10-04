import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminGestionProfHomeComponent } from './dash-admin-gestion-prof-home.component';

describe('DashAdminGestionProfHomeComponent', () => {
  let component: DashAdminGestionProfHomeComponent;
  let fixture: ComponentFixture<DashAdminGestionProfHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminGestionProfHomeComponent]
    });
    fixture = TestBed.createComponent(DashAdminGestionProfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
