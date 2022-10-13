import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {AuthService} from "@core/services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  public isAuthenticated$: Observable<boolean> | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }
}
