import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeOurWorkImageComponent } from './edite-our-work-image.component';

describe('EditeOurWorkImageComponent', () => {
  let component: EditeOurWorkImageComponent;
  let fixture: ComponentFixture<EditeOurWorkImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeOurWorkImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeOurWorkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
