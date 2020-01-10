import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFooterComponent } from './get-footer.component';

describe('GetFooterComponent', () => {
  let component: GetFooterComponent;
  let fixture: ComponentFixture<GetFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
