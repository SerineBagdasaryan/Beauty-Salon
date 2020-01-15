import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWithImagesComponent } from './service-with-images.component';

describe('ServiceWithImagesComponent', () => {
  let component: ServiceWithImagesComponent;
  let fixture: ComponentFixture<ServiceWithImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceWithImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceWithImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
