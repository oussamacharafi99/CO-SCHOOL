import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEleveHeaderComponent } from './dashboard-eleve-header.component';

describe('DashboardEleveHeaderComponent', () => {
  let component: DashboardEleveHeaderComponent;
  let fixture: ComponentFixture<DashboardEleveHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEleveHeaderComponent]
    });
    fixture = TestBed.createComponent(DashboardEleveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
