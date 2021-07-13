import { TestBed } from '@angular/core/testing';

import { CartExpandService } from './cart-expand.service';

describe('CartExpandService', () => {
  let service: CartExpandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartExpandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
