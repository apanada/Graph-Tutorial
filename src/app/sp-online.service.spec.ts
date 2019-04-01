import { TestBed } from '@angular/core/testing';

import { SpOnlineService } from './sp-online.service';

describe('SpOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpOnlineService = TestBed.get(SpOnlineService);
    expect(service).toBeTruthy();
  });
});
