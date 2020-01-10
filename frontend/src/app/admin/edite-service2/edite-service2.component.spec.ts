import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeService2Component } from './edite-service2.component';

describe('EditeService2Component', () => {
  let component: EditeService2Component;
  let fixture: ComponentFixture<EditeService2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeService2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
