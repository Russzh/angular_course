import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICourse} from "@shared/*";

import {CoursesHandlerService} from "../courses-page/services/courses-handler.service";

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
})
export class AddCoursePageComponent {
  constructor(private activatedRoute: ActivatedRoute,
              private courseHandlerService: CoursesHandlerService) {
  }

  public onSaveCourse(courseData: ICourse): void {
    this.activatedRoute.snapshot.routeConfig?.path === 'new'
      ? this.createCourse(courseData)
      : this.updateCourse(courseData);
  }

  private createCourse(courseData: ICourse): void {
    this.courseHandlerService.createCourse(
      {
        ...courseData,
        id: Math.round(Math.random() * 100),
        creationDate: new Date(courseData.creationDate),
        topRated: false
      });
  }

  private updateCourse(courseData: ICourse): void {
    const courseId: number = +this.activatedRoute.snapshot.params['id'];
    const courseForUpdating: ICourse | undefined = this.courseHandlerService.getItemById(courseId);

    if (courseForUpdating) {
      this.courseHandlerService.updateItem(
        {
          ...courseData,
          id: courseId,
          creationDate: new Date(courseData.creationDate),
          topRated: courseForUpdating.topRated
        });
    } else {
      console.error("Course for updating wasn't found");
    }
  }
}
