import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {LoadMoreButtonComponent, CoursesComponent} from "./components";
import {DurationHandlerPipe, IsCourseFreshDirective, FilterPipe, OrderByPipe, CoursesHandlerService} from "./core";
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
  ],
  providers: [CoursesHandlerService]
})
export class CoursesPageModule {
}
