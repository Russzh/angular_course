import {Component, OnDestroy, OnInit} from '@angular/core';

import {AuthService} from "@core/services/auth.service";
import {Event, NavigationEnd, Router} from "@angular/router";
import {filter, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean | undefined;

  public currentRoute$: Observable<string> = this.router.events
    .pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd): string => event.url)
    );

  public userName$: Observable<string | null> = this.authService.isAuthenticated$$
    .pipe(
      filter((isAuth: boolean) => isAuth),
      map((): string | null => {
        const email: string | undefined = this.authService.getUserInfo().email;
        if (email) {
          return email.substring(0, email.indexOf('@'));
        }
        console.error("email wasn't found");
        return null;
      }));

  private _subscriptions$: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this._subscriptions$
      .add(this.authService.isAuthenticated$$.subscribe(isAuth => this.isAuthenticated = isAuth));
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }

  public onLogInLogOff(): void {
    this.isAuthenticated ? this.authService.logout() : this.router.navigate(['login/'])
  }
}
