import { TestBed } from '@angular/core/testing';

import { KamarService } from './kamar.service';

describe('KamarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KamarService = TestBed.get(KamarService);
    expect(service).toBeTruthy();
  });
});
