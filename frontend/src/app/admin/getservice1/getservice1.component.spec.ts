import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Getservice1Component } from './getservice1.component';

describe('Getservice1Component', () => {
  let component: Getservice1Component;
  let fixture: ComponentFixture<Getservice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Getservice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Getservice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
