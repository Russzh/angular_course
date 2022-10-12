import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

import {ICourse} from "@shared/";

import isEqual from "lodash/isEqual";

import {FilterPipe} from "./pipes";
import {CoursesHandlerService} from "./services/courses-handler.service";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FilterPipe]
})
export class CoursesPageComponent implements OnInit {
  public visibleCourses: ICourse[] = [];
  public searchValue: string = '';

  constructor(private filterPipe: FilterPipe,
              private coursesHandlerService: CoursesHandlerService) {
  }

  ngOnInit(): void {
    this.visibleCourses = this.coursesHandlerService.getList();
  }

  public onDeleteCourse(courseId: number): void {
    const foundCourse: ICourse | undefined = this.coursesHandlerService.getItemById(courseId);

    if (!foundCourse) {
      console.error("Course wasn't found");
      return;
    }

    if (foundCourse
      && confirm(`Are you sure to delete '${foundCourse.title}' course`)
    ) {
      this.visibleCourses = this.coursesHandlerService.removeItem(courseId);
    }
  }

  public trackByFn(index: number, item: ICourse): number {
    return item.id;
  }

  public onSearchCourse(searchValue: string): void {
    const searchValueTrimmed: string = searchValue.trim();
    const coursesFromService: ICourse[] = this.coursesHandlerService.getList();

    if (searchValue || searchValue === '') {
      isEqual(this.visibleCourses, coursesFromService)
        ? this.visibleCourses = this.filterPipe.transform(this.visibleCourses, searchValueTrimmed)
        : this.visibleCourses = this.filterPipe.transform(coursesFromService, searchValueTrimmed)
    }
  }
}
