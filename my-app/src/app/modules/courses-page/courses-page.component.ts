import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

import {Course} from "@shared/";

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
  public initialCourses: Course[] | undefined;
  public currentCourses: Course[] | undefined;
  public searchValue: string | undefined;

  constructor(private filterPipe: FilterPipe,
              private coursesHandlerService: CoursesHandlerService) {
  }

  ngOnInit(): void {
    this.initialCourses = this.coursesHandlerService.getList();
    this.currentCourses = this.initialCourses;
  }

  public onDeleteCourse(courseId: number): void {
    if (confirm(
        `Are you sure to delete '${this.initialCourses?.find(item => item.id === courseId)?.title}' course`) &&
      this.currentCourses
    ) {
      this.currentCourses = this.coursesHandlerService.removeItem(courseId, this.currentCourses);
      this.initialCourses = this.currentCourses;
      console.log('Course has been deleted successfully')
    }
  }

  public trackByFn(index: number, item: Course): number {
    return item.id;
  }

  public onSearchCourse(searchValue: string | undefined): void {
    if (searchValue || searchValue === '') {
      this.currentCourses = this.filterPipe.transform(this.initialCourses, searchValue.trim())
    }
  }
}
