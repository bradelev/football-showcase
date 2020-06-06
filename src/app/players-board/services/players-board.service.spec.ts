import { TestBed } from '@angular/core/testing';

import { PlayersBoardService } from './players-board.service';

describe('PlayersBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayersBoardService = TestBed.get(PlayersBoardService);
    expect(service).toBeTruthy();
  });
});
