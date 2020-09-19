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

  it('should ', done => {
    service.loginConfirmedListener().subscribe(result => {
      expect(result).toEqual('hello');
      done();
    });
    service.emitLoginConfirmedEvent('hello');
  });
});
