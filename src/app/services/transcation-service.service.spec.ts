import { TestBed } from '@angular/core/testing';

import { TranscationServiceService } from './transcation-service.service';

describe('TranscationServiceService', () => {
  let service: TranscationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranscationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
