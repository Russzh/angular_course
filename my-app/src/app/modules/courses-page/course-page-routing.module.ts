import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddCoursePageComponent} from "../add-course-page/add-course-page.component";

import {CoursesComponent} from "./components";
import {CoursesPageComponent} from "./courses-page.component";

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
    title: 'All courses',
    data: {breadcrumbTitle: 'Courses'},
    children: [
      {
        path: '',
        component: CoursesComponent,
        data: {breadcrumbTitle: ''}
      },
      {
        path: 'new',
        component: AddCoursePageComponent,
        title: 'New course',
        data: {breadcrumbTitle: 'New Course'}
      },
      {
        path: ':id',
        component: AddCoursePageComponent,
        title: 'Edit course',
        data: {breadcrumbTitle: 'Edit course'}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursePageRoutingModule {
}
