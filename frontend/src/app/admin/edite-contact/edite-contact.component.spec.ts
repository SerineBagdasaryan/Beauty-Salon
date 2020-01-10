import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeContactComponent } from './edite-contact.component';

describe('EditeContactComponent', () => {
  let component: EditeContactComponent;
  let fixture: ComponentFixture<EditeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
