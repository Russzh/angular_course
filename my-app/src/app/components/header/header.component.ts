import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {AuthService} from "@core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(value => this.isAuthenticated = value);
  }

  public onLogOff(): void {
    this.authService.logout();
    console.log('Log off successfully');
  }
}
