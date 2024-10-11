import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminChatIAComponent } from './dash-admin-chat-ia.component';

describe('DashAdminChatIAComponent', () => {
  let component: DashAdminChatIAComponent;
  let fixture: ComponentFixture<DashAdminChatIAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdminChatIAComponent]
    });
    fixture = TestBed.createComponent(DashAdminChatIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
