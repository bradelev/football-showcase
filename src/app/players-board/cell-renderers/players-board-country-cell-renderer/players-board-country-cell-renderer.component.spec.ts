import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersBoardCountryCellRendererComponent } from './players-board-country-cell-renderer.component';

describe('PlayersBoardCountryCellRendererComponent', () => {
  let component: PlayersBoardCountryCellRendererComponent;
  let fixture: ComponentFixture<PlayersBoardCountryCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersBoardCountryCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersBoardCountryCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
