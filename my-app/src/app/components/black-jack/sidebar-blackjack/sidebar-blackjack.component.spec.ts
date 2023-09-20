import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBlackjackComponent } from './sidebar-blackjack.component';

describe('SidebarBlackjackComponent', () => {
  let component: SidebarBlackjackComponent;
  let fixture: ComponentFixture<SidebarBlackjackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarBlackjackComponent]
    });
    fixture = TestBed.createComponent(SidebarBlackjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
