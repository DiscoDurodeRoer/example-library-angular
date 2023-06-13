import { TestBed } from '@angular/core/testing';

import { DdrTestLibraryService } from './ddr-test-library.service';

describe('DdrTestLibraryService', () => {
  let service: DdrTestLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdrTestLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
