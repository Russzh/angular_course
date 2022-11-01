import {Component, OnInit, OnDestroy} from '@angular/core';

import {ICourse} from "@shared/";

import {isEqual} from "lodash";

import {Subscription} from "rxjs";

import {FilterPipe} from "../../pipes";
import {CoursesHandlerService} from "../../services/courses-handler.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [FilterPipe]
})
export class CoursesComponent implements OnInit, OnDestroy {
  public visibleCourses: ICourse[] = [];
  public searchValue: string = '';

  private _subscriptions$: Subscription = new Subscription();
  private existingCourses: ICourse[] = [];

  constructor(private filterPipe: FilterPipe,
              private coursesHandlerService: CoursesHandlerService) {
  }

  ngOnInit(): void {
    this.getListOfCourses();
  }

  ngOnDestroy(): void {
    this._subscriptions$?.unsubscribe();
  }

  private getListOfCourses(): void {
    this._subscriptions$.add(this.coursesHandlerService.getList()
      .subscribe(existingCourses => {
        this.visibleCourses = structuredClone(existingCourses);
        this.existingCourses = structuredClone(existingCourses);
      }));
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
      this.coursesHandlerService.removeItem(courseId);
    }
  }

  public trackByFn(index: number, item: ICourse): number {
    return item.id;
  }

  public onSearchCourse(searchValue: string): void {
    const searchValueTrimmed: string = searchValue.trim();

    if (searchValue || searchValue === '') {
      isEqual(this.visibleCourses, this.existingCourses)
        ? this.visibleCourses = this.filterPipe.transform(this.visibleCourses, searchValueTrimmed)
        : this.visibleCourses = this.filterPipe.transform(this.existingCourses, searchValueTrimmed)
    }
  }
}
