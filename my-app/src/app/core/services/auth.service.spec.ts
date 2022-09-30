import {TestBed} from '@angular/core/testing';

import {localStorageMock} from "@shared/*";

import {AuthService} from './auth.service';

describe('AuthServiceService', () => {
  let service: AuthService;

  Object.defineProperty(window, "localStorage", {value: localStorageMock});

  beforeEach(() => {
    window.localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call generateToken(), ' +
    'assign true to IsAuthenticated variable, have email and token values in localStorage by login', () => {
    const email: string = 'email@gmail.com';
    spyOn<any>(service, 'generateToken');

    service.login(email);

    expect(localStorage.getItem('email')).toEqual(email);
    expect(service['generateToken']).toHaveBeenCalled();
    expect(service.IsAuthenticated).toBeTruthy();
  });

  it('should return string at least 20 characters long by calling generateToken()', () => {
    const result = service['generateToken']();

    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(20);
  });

  it('should remove email and token fields from localStorage ' +
    'and assign false to the IsAuthenticated by logout', () => {
    const email: string = 'email@gmail.com';

    service.IsAuthenticated = true;
    service.login(email);
    service.logout();

    expect(localStorage.getItem('email')).toBeUndefined();
    expect(localStorage.getItem('token')).toBeUndefined();
    expect(service.IsAuthenticated).toBeFalse();
  });
});
