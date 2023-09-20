import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsesComponent } from './horses.component';

describe('HorsesComponent', () => {
  let component: HorsesComponent;
  let fixture: ComponentFixture<HorsesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorsesComponent]
    });
    fixture = TestBed.createComponent(HorsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
