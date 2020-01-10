import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOurWorkImageComponent } from './create-our-work-image.component';

describe('CreateOurWorkImageComponent', () => {
  let component: CreateOurWorkImageComponent;
  let fixture: ComponentFixture<CreateOurWorkImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOurWorkImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOurWorkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
