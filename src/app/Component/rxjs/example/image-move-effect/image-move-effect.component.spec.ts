import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMoveEffectComponent } from './image-move-effect.component';

describe('ImageMoveEffectComponent', () => {
  let component: ImageMoveEffectComponent;
  let fixture: ComponentFixture<ImageMoveEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageMoveEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMoveEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
