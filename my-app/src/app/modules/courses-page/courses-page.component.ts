import {Component, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';

import {ICourse} from "@shared/";

import {ActivatedRoute, Router} from "@angular/router";

import {isEqual} from "lodash";

import {Subscription} from "rxjs";

import {FilterPipe} from "./pipes";
import {CoursesHandlerService} from "./services/courses-handler.service";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FilterPipe]
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  public visibleCourses: ICourse[] = [];
  public searchValue: string = '';

  private _subscriptions$: Subscription = new Subscription();
  private existingCourses: ICourse[] = [];

  constructor(private filterPipe: FilterPipe,
              private coursesHandlerService: CoursesHandlerService,
              private route: ActivatedRoute,
              private router: Router) {
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

  public onEditCourse(course: ICourse): void {
    this.router.navigate(["/courses", course.id]);
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

  public onAddCourse(): void {
    this.router.navigate(['/courses/new'])
  }
}
