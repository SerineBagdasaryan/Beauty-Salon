import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditePriceComponent } from './edite-price.component';

describe('EditePriceComponent', () => {
  let component: EditePriceComponent;
  let fixture: ComponentFixture<EditePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
