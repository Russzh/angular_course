import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

import {ICourse} from "@shared/*";

import {format} from "date-fns";

import {CoursesHandlerService} from "../../services/courses-handler.service";

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCoursePageComponent implements OnInit, OnDestroy {
  public subRoute: string = '';
  public newCourseGroup: FormGroup = this.formBuilder.group({
    title: ['title'],
    description: ['description'],
    duration: [60],
    creationDate: ['MM/DD/YYYY'],
    authors: ['Start typing']
  });
  private _subscriptions$: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private courseHandlerService: CoursesHandlerService) {
  }

  ngOnInit(): void {
    this.handleRouteParam();
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }

  cancelButtonClicked(): void {
    this.router.navigate(['/courses']);
  }

  saveButtonClicked(courseData: ICourse): void {
    if (this.activatedRoute.snapshot.url[1]?.path === 'new') {
      this.courseHandlerService.createCourse(
        {
          ...courseData,
          id: Math.round(Math.random() * 100),
          creationDate: new Date(courseData.creationDate),
          topRated: false
        });
    } else {
      const courseId: number = +this.activatedRoute.snapshot.url[1]?.path;
      this.courseHandlerService.updateItem(
        {
          ...courseData,
          id: courseId,
          creationDate: new Date(courseData.creationDate),
          topRated: this.courseHandlerService.getItemById(courseId)!.topRated
        });
    }

    this.router.navigate(['/courses']);
  }

  private handleRouteParam(): void {
    this._subscriptions$.add(this.activatedRoute.params
      .subscribe(params => {
        const subRoute: string = params['id'];
        const courseForEditing: ICourse | undefined = this.courseHandlerService.getItemById(+subRoute);

        if (courseForEditing) {
          this.newCourseGroup.patchValue({
            title: courseForEditing.title,
            description: courseForEditing.description,
            duration: courseForEditing.duration,
            creationDate: format(courseForEditing.creationDate, 'MM/dd/yyyy')
          })
        }

        this.subRoute = subRoute;
      }));
  }
}

