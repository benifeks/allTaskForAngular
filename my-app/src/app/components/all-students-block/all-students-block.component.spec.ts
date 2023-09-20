import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsBlockComponent } from './all-students-block.component';

describe('AllStudentsBlockComponent', () => {
  let component: AllStudentsBlockComponent;
  let fixture: ComponentFixture<AllStudentsBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllStudentsBlockComponent]
    });
    fixture = TestBed.createComponent(AllStudentsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
