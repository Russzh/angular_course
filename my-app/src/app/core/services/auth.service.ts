import {Injectable} from '@angular/core';
import {ILocalStorageUserInfo} from "@shared/";
import {BehaviorSubject} from "rxjs";

export interface IAuthService {
  isAuthenticated$: BehaviorSubject<boolean>;

  login(email: string): void,

  logout(): void,

  getUserInfo(): ILocalStorageUserInfo;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService implements IAuthService {
  public isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {
  }

  public login(email: string): void {
    localStorage.setItem('email', email);
    localStorage.setItem('token', this.generateToken());
    this.isAuthenticated$.next(true);
  }

  private generateToken(): string {
    return Math.random().toString(20).substring(2) + Math.random().toString(20).substring(2);
  }

  public logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.isAuthenticated$.next(false);
  }

  public getUserInfo(): ILocalStorageUserInfo {
    return {'email': localStorage.getItem('email'), 'token': localStorage.getItem('token')}
  }
}
