import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesBlockComponent } from './variables-block.component';

describe('VariablesBlockComponent', () => {
  let component: VariablesBlockComponent;
  let fixture: ComponentFixture<VariablesBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariablesBlockComponent]
    });
    fixture = TestBed.createComponent(VariablesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
