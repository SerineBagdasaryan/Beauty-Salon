import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeService1Component } from './edite-service1.component';

describe('EditeService1Component', () => {
  let component: EditeService1Component;
  let fixture: ComponentFixture<EditeService1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeService1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
