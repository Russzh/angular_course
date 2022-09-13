import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

import isEqual from "lodash/isEqual";

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {Course} from "@shared/";

import {FilterPipe} from "./core";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FilterPipe]
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[] | undefined;
  public searchValue: string | undefined;

  constructor(private filter: FilterPipe) {
  }

  ngOnInit(): void {
    this.courses = COURSE_DATA;
  }

  public onDeleteCourse(courseId: number): void {
    console.log(courseId);
  }

  public trackByFn(index: number, item: Course): number {
    return item.id;
  }

  public onSearchCourse(searchValue: string | undefined): void {
    if (searchValue || searchValue === '') {
      const searchValueTrimmed: string = searchValue.trim();
      isEqual(this.courses, COURSE_DATA)
        ? this.courses = this.filter.transform(this.courses, searchValueTrimmed)
        : this.courses = this.filter.transform(COURSE_DATA, searchValueTrimmed)
    }
  }
}
