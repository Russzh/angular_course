import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {CoursesComponent} from './components/courses/courses.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {LoadMoreButtonComponent} from './components/load-more-button/load-more-button.component';
import {DurationHandlerPipe, OrderByPipe, FilterPipe, IsCourseFreshDirective} from "./shared";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LoadMoreButtonComponent,
    DurationHandlerPipe,
    OrderByPipe,
    FilterPipe,
    IsCourseFreshDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
