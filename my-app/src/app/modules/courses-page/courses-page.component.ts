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
    const courseTitle: string | undefined = this.coursesHandlerService.getItemById(courseId)?.title;

    if (confirm(
      `Are you sure to delete '${courseTitle}' course`) && this.visibleCourses
    ) {
      this.visibleCourses = this.coursesHandlerService.removeItem(courseId);
      console.log('Course has been deleted successfully')
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
        ? this.visibleCourses =this.filterPipe.transform(this.visibleCourses, searchValueTrimmed) as Array<ICourse>
        : this.visibleCourses =this.filterPipe.transform(coursesFromService, searchValueTrimmed) as Array<ICourse>
    }
  }
}
