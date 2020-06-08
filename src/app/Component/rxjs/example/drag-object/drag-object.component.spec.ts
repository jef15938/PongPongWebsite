import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragObjectComponent } from './drag-object.component';

describe('DragObjectComponent', () => {
  let component: DragObjectComponent;
  let fixture: ComponentFixture<DragObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
