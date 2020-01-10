import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeFooterComponent } from './edite-footer.component';

describe('EditeFooterComponent', () => {
  let component: EditeFooterComponent;
  let fixture: ComponentFixture<EditeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
