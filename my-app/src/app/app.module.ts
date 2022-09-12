import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BreadcrumbsComponent, HeaderComponent, FooterComponent} from './components';
import {CoursesPageModule} from "./modules";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    CoursesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
