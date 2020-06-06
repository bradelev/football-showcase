import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersDetailCellRendererComponent } from './players-detail-cell-renderer.component';

describe('PlayersDetailCellRendererComponent', () => {
  let component: PlayersDetailCellRendererComponent;
  let fixture: ComponentFixture<PlayersDetailCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersDetailCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersDetailCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
