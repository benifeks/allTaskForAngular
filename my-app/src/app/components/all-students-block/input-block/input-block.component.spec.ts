import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBlockComponent } from './input-block.component';

describe('InputBlockComponent', () => {
  let component: InputBlockComponent;
  let fixture: ComponentFixture<InputBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputBlockComponent]
    });
    fixture = TestBed.createComponent(InputBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
