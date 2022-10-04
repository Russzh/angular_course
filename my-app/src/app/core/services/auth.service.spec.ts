import {TestBed} from '@angular/core/testing';

import {localStorageMock} from "@shared/*";

import {BehaviorSubject} from "rxjs";

import {AuthService} from './auth.service';

describe('AuthServiceService', () => {
  let service: AuthService;

  beforeAll(() => Object.defineProperty(window, "localStorage", {value: localStorageMock}));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  afterAll(() => Object.defineProperty(window, "localStorage", {value: localStorage}));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should assign true to IsAuthenticated variable, ' +
    'have email, token values as string and at least 20 characters long in localStorage by login', () => {
    const email: string = 'email@gmail.com';

    service.login(email);
    const tokenValue: string | null = localStorage.getItem('token');

    expect(localStorage.getItem('email')).toEqual(email);
    expect(tokenValue).toBeTruthy();
    expect(tokenValue?.length).toBeGreaterThan(20);
    expect(typeof tokenValue).toBe('string');
    expect(service.isAuthenticated$).toBeTruthy();
  });


  it('should remove email, token fields from localStorage ' +
    'and return false value by isAuthenticated$ observable by logout', () => {
    const email: string = 'email@gmail.com';

    service.isAuthenticated$ = new BehaviorSubject<boolean>(true)
    service.login(email);
    service.logout();

    expect(localStorage.getItem('email')).toBeUndefined();
    expect(localStorage.getItem('token')).toBeUndefined();
    service.isAuthenticated$.subscribe(value => expect(value).toBeFalse())
  });
});
