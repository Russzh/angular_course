import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {LoadMoreButtonComponent, CoursesComponent} from "./components";
import {DurationHandlerPipe, IsCourseFreshDirective, FilterPipe, OrderByPipe} from "./core";
import {CoursesPageComponent} from "./courses-page.component";

@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesComponent,
    LoadMoreButtonComponent,
    DurationHandlerPipe,
    IsCourseFreshDirective,
    OrderByPipe,
    FilterPipe],
  exports: [
    CoursesPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class CoursesPageModule {
}
