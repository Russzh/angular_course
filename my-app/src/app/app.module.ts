import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CoreModule} from "@core/core.module";

import {AppComponent} from './app.component';
import {BreadcrumbsComponent, HeaderComponent, FooterComponent} from './components';
import {AddCoursePageModule, CoursesPageModule, LoginPageModule} from "./modules";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    CoursesPageModule,
    LoginPageModule,
    AddCoursePageModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
