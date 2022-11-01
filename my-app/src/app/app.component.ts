import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, Subscription, tap} from "rxjs";
import {Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit, OnDestroy {
  public navigationEndEvent: NavigationEnd | undefined;

  private _subscriptions$: Subscription = new Subscription();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this._subscriptions$.add(this.subscribeNavigationEndEvent());
  }

  private subscribeNavigationEndEvent(): Subscription {
    return this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
        tap(navigationEndEvent => this.navigationEndEvent = navigationEndEvent),
      ).subscribe();
  }

  ngOnDestroy() {
    this._subscriptions$.unsubscribe();
  }
}
