import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public IsAuthenticated: boolean = true;

  constructor() {
  }

  public login(email: string): void {
    localStorage.setItem('email', email);
    localStorage.setItem('token', this.generateToken());
    this.IsAuthenticated = true;
  }

  public generateToken(): string {
    return Math.random().toString(20).substring(2) + Math.random().toString(20).substring(2);
  }

  public logout(): void {
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      this.IsAuthenticated = false;
  }

  public getUserInfo() {
    return {'email': localStorage.getItem('email'), 'token': localStorage.getItem('token')}
  }
}