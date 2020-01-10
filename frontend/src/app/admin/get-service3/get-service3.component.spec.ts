import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetService3Component } from './get-service3.component';

describe('GetService3Component', () => {
  let component: GetService3Component;
  let fixture: ComponentFixture<GetService3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetService3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetService3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
