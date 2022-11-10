import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "@core/core.module";

import {RouterModule} from "@angular/router";

import {AddCoursePageComponent} from "./add-course-page.component";
import {WrapperComponent} from "./components/wrapper-component/wrapper-component.component";
import {NewCourseFormComponent} from './components/new-course-form/new-course-form.component';


@NgModule({
  declarations: [
    AddCoursePageComponent,
    WrapperComponent,
    NewCourseFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class AddCoursePageModule {
}
