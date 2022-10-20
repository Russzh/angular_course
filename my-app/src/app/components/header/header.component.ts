import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import {AuthService} from "@core/services/auth.service";
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean | undefined;
  public currentRoute: string = '';
  public userName: string = '';

  private _subscriptions$: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.changeUserName()
    this.handleRouteEvents();
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }

  private changeUserName(): void {
    this._subscriptions$.add(this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
      if (isAuth) {
        const email: string | undefined = this.authService.getUserInfo().email?.trim();
        if (email) {
          this.userName = email.substring(0, email.indexOf('@'));
        }
      }
      this.cdr.detectChanges();
    }));
  }

  private handleRouteEvents(): void {
    this._subscriptions$.add(this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.cdr.detectChanges();
      }
    }));
  }

  public onLogInLogOff(): void {
    this.isAuthenticated ? this.authService.logout() : this.router.navigate(['login/'])
  }

  public onLogoClick(): void {
    this.router.navigate(['/courses']);
  }
}
