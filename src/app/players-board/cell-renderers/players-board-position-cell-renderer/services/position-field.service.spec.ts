import { TestBed } from '@angular/core/testing';

import { PositionFieldService } from './position-field.service';

describe('PositionFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionFieldService = TestBed.get(PositionFieldService);
    expect(service).toBeTruthy();
  });
});
