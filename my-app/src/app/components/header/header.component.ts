import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {AuthService} from "@core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() public isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
  }

  public onLogOff (): void {
    this.authService.logout();
    console.log('Log off successfully');
  }
}
