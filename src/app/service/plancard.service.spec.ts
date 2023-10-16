import { TestBed } from '@angular/core/testing';

import { PlancardService } from './plancard.service';

describe('PlancardService', () => {
  let service: PlancardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlancardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
