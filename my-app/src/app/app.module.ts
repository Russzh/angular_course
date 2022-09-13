import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BreadcrumbsComponent, HeaderComponent, FooterComponent} from './components';
import {CoursesPageModule, LoginPageModule} from "./modules";
import { IfAuthenticatedDirective } from './core/directives/if-authenticated.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    IfAuthenticatedDirective
  ],
  imports: [
    BrowserModule,
    CoursesPageModule,
    LoginPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
