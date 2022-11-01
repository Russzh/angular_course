import {Component, Input, OnInit} from '@angular/core';

import {filter, map, Observable, of, startWith} from "rxjs";
import {ActivatedRoute, Event, NavigationEnd, Router} from "@angular/router";

import {IBreadcrumbs} from "./breadcrumb.model";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})

export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs$: Observable<IBreadcrumbs[]> = of([]);

  @Input() separator: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.breadcrumbs$ = this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
        startWith(this.router),
        map(() => this.createBreadcrumbs())
      );
  }

  private createBreadcrumbs(): IBreadcrumbs[] {
    let breadcrumbs: IBreadcrumbs[] = [];
    let currentRoute: ActivatedRoute | null = this.activatedRoute.root;
    let url: string = '';
    while (currentRoute) {
      const childrenRoutes = currentRoute?.children;
      currentRoute = null;
      childrenRoutes
        .map(route => {
          const breadcrumbTitle: string = route.snapshot.data['breadcrumbTitle'];
          if (route.outlet === "primary" && breadcrumbTitle !== '') {
            url +=
              "/" + route.snapshot.url.map(segment => segment.path).join("/");
            breadcrumbs?.push({
              label: breadcrumbTitle,
              url: url
            });
            currentRoute = route;
          }
        });
    }

    return breadcrumbs
  }
}
