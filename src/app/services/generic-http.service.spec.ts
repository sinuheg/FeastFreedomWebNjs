import { TestBed, inject } from '@angular/core/testing';

import { GenericHttpService } from './generic-http.service';

describe('GenericHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericHttpService]
    });
  });

  it('should be created', inject([GenericHttpService], (service: GenericHttpService) => {
    expect(service).toBeTruthy();
  }));
});
