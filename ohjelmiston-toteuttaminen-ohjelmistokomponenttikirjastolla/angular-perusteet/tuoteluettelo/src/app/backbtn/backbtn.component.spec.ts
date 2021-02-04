import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackbtnComponent } from './backbtn.component';

describe('BackbtnComponent', () => {
  let component: BackbtnComponent;
  let fixture: ComponentFixture<BackbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
