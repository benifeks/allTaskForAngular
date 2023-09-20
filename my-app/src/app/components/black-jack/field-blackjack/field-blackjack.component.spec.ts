import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBlackjackComponent } from './field-blackjack.component';

describe('FieldBlackjackComponent', () => {
  let component: FieldBlackjackComponent;
  let fixture: ComponentFixture<FieldBlackjackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldBlackjackComponent]
    });
    fixture = TestBed.createComponent(FieldBlackjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
