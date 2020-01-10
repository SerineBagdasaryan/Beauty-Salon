import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetService2Component } from './get-service2.component';

describe('GetService2Component', () => {
  let component: GetService2Component;
  let fixture: ComponentFixture<GetService2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetService2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
