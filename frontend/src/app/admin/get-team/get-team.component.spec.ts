import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTeamComponent } from './get-team.component';

describe('GetTeamComponent', () => {
  let component: GetTeamComponent;
  let fixture: ComponentFixture<GetTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
