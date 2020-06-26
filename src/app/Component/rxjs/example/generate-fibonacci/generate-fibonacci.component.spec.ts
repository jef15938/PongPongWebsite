import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFibonacciComponent } from './generate-fibonacci.component';

describe('GenerateFibonacciComponent', () => {
  let component: GenerateFibonacciComponent;
  let fixture: ComponentFixture<GenerateFibonacciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateFibonacciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateFibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
