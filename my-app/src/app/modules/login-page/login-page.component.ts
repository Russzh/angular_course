import {ChangeDetectionStrategy, Component} from '@angular/core';

import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginPageComponent {
  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService) {
  }

  public onLogin(email: string): void {
    this.authService.login(email);
    console.log("Logged in successfully")
  }
}
