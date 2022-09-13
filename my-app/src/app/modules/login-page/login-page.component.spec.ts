import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from "@angular/forms";

import {AuthService} from "@core/services/auth.service";

import {LoginPageComponent} from './login-page.component';

import Spy = jasmine.Spy;

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginPageComponent],
      providers: [AuthService]
    })
      .compileComponents();

    authService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call console.log and login method of AuthService by login()', () => {
    const email: string = 'email@gmail.com';
    const consoleSpy: Spy = spyOn(console, 'log');
    const authServiceSpy: Spy = spyOn(authService, 'login');

    component.onLogin(email);

    expect(authServiceSpy).toHaveBeenCalledWith(email);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
