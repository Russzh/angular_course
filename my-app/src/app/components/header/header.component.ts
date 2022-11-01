import {Component, OnDestroy, OnInit} from '@angular/core';

import {AuthService} from "@core/services/auth.service";
import {Event, NavigationEnd, Router} from "@angular/router";
import {filter, map, Observable, of, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean | undefined;
  public currentRoute$: Observable<string> = of('');
  public userName: string | null = '';

  private _subscriptions$: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this._subscriptions$.add(this.changeUserName());
    this.handleRouteEvents();
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }

  private changeUserName(): Subscription {
    return this.authService.isAuthenticated$
      .pipe(
        tap((isAuth: boolean) => this.isAuthenticated = isAuth),
        filter((isAuth: boolean) => isAuth),
        map((): string | null => {
          const email: string | undefined = this.authService.getUserInfo().email?.trim();
          if (email) {
            this.userName = email.substring(0, email.indexOf('@'));
            return email.substring(0, email.indexOf('@'));
          }
          return null;
        })
      )
      .subscribe((userName: string | null): void => {
          if (userName) {
            this.userName = userName
          }
        }
      )
  }

  private handleRouteEvents(): void {
    this.currentRoute$ = this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event: NavigationEnd): string => event.url)
      );
  }

  public onLogInLogOff(): void {
    this.isAuthenticated ? this.authService.logout() : this.router.navigate(['login/'])
  }
}
