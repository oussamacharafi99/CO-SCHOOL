import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfCarteEleveComponent } from './dashboard-prof-carte-eleve.component';

describe('DashboardProfCarteEleveComponent', () => {
  let component: DashboardProfCarteEleveComponent;
  let fixture: ComponentFixture<DashboardProfCarteEleveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfCarteEleveComponent]
    });
    fixture = TestBed.createComponent(DashboardProfCarteEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
