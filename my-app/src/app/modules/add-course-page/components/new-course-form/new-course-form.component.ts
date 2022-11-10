import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {ICourse} from "@shared/*";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

import {filter, map, Observable, Subscription} from "rxjs";
import {isNull, negate} from "lodash";
import {format} from "date-fns";

import {CoursesHandlerService} from "../../../courses-page/services/courses-handler.service";

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent implements OnInit, OnDestroy {
  @Output() saveCourse = new EventEmitter<ICourse>();

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

  private handleRouteParam(): Subscription {
    return this.subRoute$.pipe(
      map((subRoute: string | null) => typeof subRoute === 'string'
        ? this.courseHandlerService.getItemById(+subRoute)
        : null),
      filter(negate(isNull))).subscribe((courseForEditing) => {
        this.newCourseGroup?.patchValue({
          title: courseForEditing.title,
          description: courseForEditing.description,
          duration: courseForEditing.duration,
          creationDate: format(courseForEditing.creationDate, 'MM/dd/yyyy')
        });
      }
    );
  }

  public saveButtonClicked(courseData: any): void {
    this.saveCourse.emit(courseData);
  }
}
