import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Generate3Component } from './generate3.component';

describe('Generate3Component', () => {
  let component: Generate3Component;
  let fixture: ComponentFixture<Generate3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Generate3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Generate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
