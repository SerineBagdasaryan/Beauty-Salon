import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeService3Component } from './edite-service3.component';

describe('EditeService3Component', () => {
  let component: EditeService3Component;
  let fixture: ComponentFixture<EditeService3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeService3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeService3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
