import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {CoreModule} from "@core/core.module";

import {LoadMoreButtonComponent, CoursesComponent} from "./components";
import {FilterPipe, OrderByPipe} from "./pipes";
import {IsCourseFreshDirective} from "./directives/is-course-fresh.directive"
import {CoursesPageComponent} from "./courses-page.component";

@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesComponent,
    LoadMoreButtonComponent,
    IsCourseFreshDirective,
    OrderByPipe,
    FilterPipe],
  imports: [
    FormsModule,
    CommonModule,
    CoreModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule {
}
