import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersBoardClubCellRendererComponent } from './players-board-club-cell-renderer.component';

describe('PlayersBoardClubCellRendererComponent', () => {
  let component: PlayersBoardClubCellRendererComponent;
  let fixture: ComponentFixture<PlayersBoardClubCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersBoardClubCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersBoardClubCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
