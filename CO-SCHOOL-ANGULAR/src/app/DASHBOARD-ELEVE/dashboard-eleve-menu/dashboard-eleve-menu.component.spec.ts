import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEleveMenuComponent } from './dashboard-eleve-menu.component';

describe('DashboardEleveMenuComponent', () => {
  let component: DashboardEleveMenuComponent;
  let fixture: ComponentFixture<DashboardEleveMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEleveMenuComponent]
    });
    fixture = TestBed.createComponent(DashboardEleveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
