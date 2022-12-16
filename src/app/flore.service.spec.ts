import { TestBed } from '@angular/core/testing';

import { FloreService } from './flore.service';

describe('FloreService', () => {
  let service: FloreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
