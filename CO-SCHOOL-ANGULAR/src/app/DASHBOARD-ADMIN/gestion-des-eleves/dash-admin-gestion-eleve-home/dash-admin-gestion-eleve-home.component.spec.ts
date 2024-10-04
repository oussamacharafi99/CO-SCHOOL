import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminGestionEleveHomeComponent } from './dash-admin-gestion-eleve-home.component';

describe('DashAdminGestionEleveHomeComponent', () => {
  let component: DashAdminGestionEleveHomeComponent;
  let fixture: ComponentFixture<DashAdminGestionEleveHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminGestionEleveHomeComponent]
    });
    fixture = TestBed.createComponent(DashAdminGestionEleveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
