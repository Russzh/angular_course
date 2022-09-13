import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthService} from "@core/services/auth.service";

import {IfAuthenticatedDirective} from "@core/directives/if-authenticated.directive";

import {HeaderComponent} from './header.component';

import Spy = jasmine.Spy;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, IfAuthenticatedDirective]
    })
      .compileComponents();

    authService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call console.log and logout method of AuthService by onLogOff()', () => {
    const consoleSpy: Spy = spyOn(console, 'log');
    const logoutAuthSpy: Spy = spyOn(authService, 'logout');

    component.onLogOff();

    expect(logoutAuthSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
