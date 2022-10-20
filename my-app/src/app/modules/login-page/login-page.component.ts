import {ChangeDetectionStrategy, Component} from '@angular/core';

import {AuthService} from "@core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginPageComponent {
  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  public onLogin(email: string): void {
    this.authService.login(email);
    this.router.navigate(['/courses']);
  }
}
