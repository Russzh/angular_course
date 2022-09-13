import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {LoadMoreButtonComponent, CoursesComponent} from "./components";
import {DurationHandlerPipe, FilterPipe, OrderByPipe, } from "./pipes";
import {IsCourseFreshDirective} from "./directives/is-course-fresh.directive"
import {CoursesPageComponent} from "./courses-page.component";

@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesComponent,
    LoadMoreButtonComponent,
    IsCourseFreshDirective,
    DurationHandlerPipe,
    OrderByPipe,
    FilterPipe],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule {
}
