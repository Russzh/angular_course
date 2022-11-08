import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, map, Observable} from "rxjs";
import {Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  public navigationEndEvent$: Observable<Boolean> = this.router.events
    .pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        return event.url !== '/login'
          && event.url !== '/not-found-page'
          && event.urlAfterRedirects !== '/not-found-page';
      })
    );

  constructor(private router: Router) {
  }
}
