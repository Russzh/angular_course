import {fakeAsync, TestBed} from '@angular/core/testing';

import {localStorageMock} from "@shared/*";

import {BehaviorSubject} from "rxjs";

import {AuthService} from './auth.service';

describe('AuthServiceService', () => {
  let service: AuthService;
  let copiedLocalStorage: Storage;
  let isAuthenticated: boolean;
  const EMAIL: string = 'email@gmail.com';

  beforeAll(() => {
    copiedLocalStorage = Object.assign({}, localStorage);
    Object.defineProperty(window, "localStorage", {value: localStorageMock});
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  afterAll(() => Object.defineProperty(window, "localStorage", {value: copiedLocalStorage}));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a correct email value as string in localStorage by login', () => {
    service.login(EMAIL);
    const emailValue: string | null = localStorage.getItem('email');

    expect(emailValue).toEqual(EMAIL);
    expect(emailValue).toEqual(EMAIL);
  });

  it('should have a correct token value as string ' +
    'and at least 20 characters long in localStorage by login', () => {
    service.login(EMAIL);
    const tokenValue: string | null = localStorage.getItem('token');

    expect(localStorage.getItem('email')).toEqual(EMAIL);
    expect(tokenValue).toBeTruthy();
    expect(tokenValue?.length).toBeGreaterThan(20);
    expect(typeof tokenValue).toBe('string');
  });

  it('should assign true to isAuthenticated$ variable', () => {
    service.login(EMAIL);

    expect(service.isAuthenticated$).toBeTruthy();
  });

  it('should remove email, token fields from localStorage ' +
    'and return false value by isAuthenticated$ observable by logout', fakeAsync(() => {
    service.isAuthenticated$ = new BehaviorSubject<boolean>(true);

    service.login(EMAIL);
    service.logout();
    service.isAuthenticated$.subscribe(value => isAuthenticated = value);

    expect(localStorage.getItem('email')).toBeUndefined();
    expect(localStorage.getItem('token')).toBeUndefined();
    expect(isAuthenticated).toBeFalsy();
  }));
});
