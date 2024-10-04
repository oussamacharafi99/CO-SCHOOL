import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminAddProfComponent } from './dash-admin-add-prof.component';

describe('DashAdminAddProfComponent', () => {
  let component: DashAdminAddProfComponent;
  let fixture: ComponentFixture<DashAdminAddProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminAddProfComponent]
    });
    fixture = TestBed.createComponent(DashAdminAddProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
