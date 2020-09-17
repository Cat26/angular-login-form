import { TestBed } from '@angular/core/testing';

import { LoginConfirmationService } from './login-confirmation.service';

describe('LoginConfirmationService', () => {
  let service: LoginConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
