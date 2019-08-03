import { TestBed } from '@angular/core/testing';

import { SignOnAuthGuardService } from './sign-on-auth-guard.service';

describe('SignOnAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignOnAuthGuardService = TestBed.get(SignOnAuthGuardService);
    expect(service).toBeTruthy();
  });
});
