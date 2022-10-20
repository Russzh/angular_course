import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CoreModule} from "@core/core.module";

import {RouterModule, Routes} from "@angular/router";


import {AddCoursePageComponent} from "./components/add-course-page/add-course-page.component";

import {LoadMoreButtonComponent, CoursesComponent} from "./components";
import {FilterPipe, OrderByPipe} from "./pipes";
import {IsCourseFreshDirective} from "./directives/is-course-fresh.directive"
import {CoursesPageComponent} from "./courses-page.component";
import {WrapperComponent} from "./components/wrapper-component/wrapper-component.component";

const routes: Routes = [
  {
    path: "courses",
    pathMatch: "full",
    component: CoursesPageComponent,
  },
  {
    path: "courses/:id",
    component: AddCoursePageComponent,
  },
  {
    path: "courses/new",
    component: AddCoursePageComponent,
  }
]

@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesComponent,
    LoadMoreButtonComponent,
    AddCoursePageComponent,
    WrapperComponent,
    IsCourseFreshDirective,
    OrderByPipe,
    FilterPipe],
  imports: [
    FormsModule,
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CoursesPageComponent,
    RouterModule
  ]
})
export class CoursesPageModule {
}
