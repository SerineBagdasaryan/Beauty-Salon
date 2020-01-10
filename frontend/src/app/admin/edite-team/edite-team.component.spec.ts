import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeTeamComponent } from './edite-team.component';

describe('EditeTeamComponent', () => {
  let component: EditeTeamComponent;
  let fixture: ComponentFixture<EditeTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
