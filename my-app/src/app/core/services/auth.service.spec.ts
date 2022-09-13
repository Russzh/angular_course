import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';

import Spy = jasmine.Spy;

describe('AuthServiceService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call generateToken(), ' +
    'assign true to IsAuthenticated variable, have email and token values in localStorage by login', () => {
    const email: string = 'email@gmail.com';
    const generationTokenSpy: Spy = spyOn(service, 'generateToken');

    service.login(email);

    expect(localStorage.getItem('email')).toEqual(email);
    expect(generationTokenSpy).toHaveBeenCalled();
    expect(service.IsAuthenticated).toBeTruthy();
  });

  it('should return string at least 20 characters long by calling generateToken()', () => {
    const result = service.generateToken();

    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(20);
  });

  it('should remove email and token fields from localStorage ' +
    'and assign false to the IsAuthenticated by logout', () => {
    const email: string = 'email@gmail.com';

    service.IsAuthenticated = true;
    service.login(email);
    service.logout();

    expect(localStorage.getItem('email')).toBeNull();
    expect(localStorage.getItem('token')).toBeNull();
    expect(service.IsAuthenticated).toBeFalse();
  });
});
