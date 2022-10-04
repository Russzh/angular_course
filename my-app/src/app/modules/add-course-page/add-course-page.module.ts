import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CoreModule} from "@core/core.module";

import {CoursesPageModule} from "../courses-page/courses-page.module";

import {AddCoursePageComponent} from "./add-course-page.component";

@NgModule({
  declarations: [AddCoursePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesPageModule,
    CoreModule
  ],
  exports: [AddCoursePageComponent]
})
export class AddCoursePageModule {
}
