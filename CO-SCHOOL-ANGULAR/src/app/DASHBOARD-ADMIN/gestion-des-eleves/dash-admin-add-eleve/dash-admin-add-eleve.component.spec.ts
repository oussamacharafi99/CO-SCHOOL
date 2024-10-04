import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminAddEleveComponent } from './dash-admin-add-eleve.component';

describe('DashAdminAddEleveComponent', () => {
  let component: DashAdminAddEleveComponent;
  let fixture: ComponentFixture<DashAdminAddEleveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminAddEleveComponent]
    });
    fixture = TestBed.createComponent(DashAdminAddEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
