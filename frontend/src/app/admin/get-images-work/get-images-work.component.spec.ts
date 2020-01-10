import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetImagesWorkComponent } from './get-images-work.component';

describe('GetImagesWorkComponent', () => {
  let component: GetImagesWorkComponent;
  let fixture: ComponentFixture<GetImagesWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetImagesWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetImagesWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
