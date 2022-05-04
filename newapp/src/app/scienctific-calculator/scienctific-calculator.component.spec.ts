import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienctificCalculatorComponent } from './scienctific-calculator.component';

describe('ScienctificCalculatorComponent', () => {
  let component: ScienctificCalculatorComponent;
  let fixture: ComponentFixture<ScienctificCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienctificCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienctificCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
