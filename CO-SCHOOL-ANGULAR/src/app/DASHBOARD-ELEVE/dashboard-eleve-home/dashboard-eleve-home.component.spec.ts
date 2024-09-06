import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEleveHomeComponent } from './dashboard-eleve-home.component';

describe('DashboardEleveHomeComponent', () => {
  let component: DashboardEleveHomeComponent;
  let fixture: ComponentFixture<DashboardEleveHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEleveHomeComponent]
    });
    fixture = TestBed.createComponent(DashboardEleveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
