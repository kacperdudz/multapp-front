import { TestBed } from '@angular/core/testing';

import { CardManipService } from './card-manip.service';

describe('CardManipService', () => {
  let service: CardManipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardManipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
