import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {CoreModule} from "@core/core.module";

import {RouterModule} from "@angular/router";

import {AddCoursePageModule, CoursePageRoutingModule} from "@modules/*";

import {LoadMoreButtonComponent, CoursesComponent, CourseItemComponent} from "./components";
import {FilterPipe, OrderByPipe} from "./pipes";
import {IsCourseFreshDirective} from "./directives/is-course-fresh.directive"
import {CoursesPageComponent} from "./courses-page.component";

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseItemComponent,
    LoadMoreButtonComponent,
    IsCourseFreshDirective,
    OrderByPipe,
    FilterPipe,
    CoursesComponent],
  imports: [
    CoursePageRoutingModule,
    FormsModule,
    CommonModule,
    CoreModule,
    AddCoursePageModule
  ],
  exports: [
    CoursesPageComponent,
    RouterModule
  ]
})
export class CoursesPageModule {
}
