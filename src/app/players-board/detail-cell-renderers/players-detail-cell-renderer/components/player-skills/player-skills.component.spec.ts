import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSkillsComponent } from './player-skills.component';

describe('PlayerSkillsComponent', () => {
  let component: PlayerSkillsComponent;
  let fixture: ComponentFixture<PlayerSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
