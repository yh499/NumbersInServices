import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Generate2Component } from './generate2.component';

describe('Generate2Component', () => {
  let component: Generate2Component;
  let fixture: ComponentFixture<Generate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Generate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Generate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
