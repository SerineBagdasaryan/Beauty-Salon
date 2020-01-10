import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeServiceComponent } from './edite-service.component';

describe('EditeServiceComponent', () => {
  let component: EditeServiceComponent;
  let fixture: ComponentFixture<EditeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
