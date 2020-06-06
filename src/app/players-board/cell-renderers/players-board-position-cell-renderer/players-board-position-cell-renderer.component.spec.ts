import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersBoardPositionCellRendererComponent } from './players-board-position-cell-renderer.component';

describe('PlayersBoardPositionCellRendererComponent', () => {
  let component: PlayersBoardPositionCellRendererComponent;
  let fixture: ComponentFixture<PlayersBoardPositionCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersBoardPositionCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersBoardPositionCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
