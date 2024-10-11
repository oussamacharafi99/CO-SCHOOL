import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminUpdateEleveComponent } from './dash-admin-update-eleve.component';

describe('DashAdminUpdateEleveComponent', () => {
  let component: DashAdminUpdateEleveComponent;
  let fixture: ComponentFixture<DashAdminUpdateEleveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminUpdateEleveComponent]
    });
    fixture = TestBed.createComponent(DashAdminUpdateEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
