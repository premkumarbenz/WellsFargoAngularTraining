import { TestBed } from '@angular/core/testing';

import { TheAwesomeLibService } from './the-awesome-lib.service';

describe('TheAwesomeLibService', () => {
  let service: TheAwesomeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheAwesomeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
