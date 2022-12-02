import { TestBed } from '@angular/core/testing';

import { DeviceMappingService } from './devicemapping.service';

describe('UserService', () => {
  let service: DeviceMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
