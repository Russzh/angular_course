import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CoreModule} from "@core/core.module";

import {RouterModule} from "@angular/router";

import {CoursesPageModule, LoginPageModule} from "@modules/*";

import {AppComponent} from './app.component';
import {HeaderComponent, FooterComponent, BreadcrumbsComponent} from './components';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoursesPageModule,
    LoginPageModule,
    CoreModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
