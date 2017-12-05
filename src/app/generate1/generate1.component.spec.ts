import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Generate1Component } from './generate1.component';

describe('Generate1Component', () => {
  let component: Generate1Component;
  let fixture: ComponentFixture<Generate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Generate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Generate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
