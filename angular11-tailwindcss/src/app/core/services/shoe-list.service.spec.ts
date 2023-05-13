import { TestBed } from '@angular/core/testing';

import { ShoeListService } from './shoe-list.service';

describe('ShoeListService', () => {
  let service: ShoeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
