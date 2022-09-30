import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {IfAuthenticatedDirective} from '@core/directives/if-authenticated.directive';

import {AppComponent} from './app.component';
import {BreadcrumbsComponent, HeaderComponent, FooterComponent} from './components';
import {CoursesPageModule, LoginPageModule} from "./modules";

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
