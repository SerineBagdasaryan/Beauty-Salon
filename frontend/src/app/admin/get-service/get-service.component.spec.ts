import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServiceComponent } from './get-service.component';

describe('GetServiceComponent', () => {
  let component: GetServiceComponent;
  let fixture: ComponentFixture<GetServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
