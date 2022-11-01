import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {filter, map, Observable, Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

import {ICourse} from "@shared/*";
import {isNull, negate} from "lodash";
import {format} from "date-fns";

import {CoursesHandlerService} from "../courses-page/services/courses-handler.service";

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
})
export class AddCoursePageComponent implements OnInit, OnDestroy {
  public newCourseGroup: FormGroup = this.formBuilder.group({
    title: ['title'],
    description: ['description'],
    duration: [60],
    creationDate: ['MM/DD/YYYY'],
    authors: ['Start typing']
  });

  private subRoute$: Observable<string | null> = this.activatedRoute.paramMap.pipe(
    map((params: ParamMap) => params.get('id')));

  private _subscriptions$: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private courseHandlerService: CoursesHandlerService) {
  }

  ngOnInit(): void {
    this._subscriptions$.add(this.handleRouteParam());
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }

  onSaveCourse(courseData: ICourse) {
    if (this.activatedRoute.snapshot.routeConfig?.path === 'new') {
      this.courseHandlerService.createCourse(
        {
          ...courseData,
          id: Math.round(Math.random() * 100),
          creationDate: new Date(courseData.creationDate),
          topRated: false
        });
    } else {
      const courseId: number = +this.activatedRoute.snapshot.params['id'];
      this.courseHandlerService.updateItem(
        {
          ...courseData,
          id: courseId,
          creationDate: new Date(courseData.creationDate),
          topRated: this.courseHandlerService.getItemById(courseId)!.topRated
        });
    }
  }

  private handleRouteParam(): Subscription {
    return this.subRoute$.pipe(
      map((subRoute: string | null) => typeof subRoute === 'string'
        ? this.courseHandlerService.getItemById(+subRoute)
        : null),
      filter(negate(isNull))).subscribe((courseForEditing) => {
        this.newCourseGroup.patchValue({
          title: courseForEditing.title,
          description: courseForEditing.description,
          duration: courseForEditing.duration,
          creationDate: format(courseForEditing.creationDate, 'MM/dd/yyyy')
        });
      }
    );
  }
}
