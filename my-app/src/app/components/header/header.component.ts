import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {AuthService} from "@core/services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {
  public isAuthenticated$: Observable<boolean> | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  public onLogOff(): void {
    this.authService.logout();
    console.log('Log off successfully');
  }
}
