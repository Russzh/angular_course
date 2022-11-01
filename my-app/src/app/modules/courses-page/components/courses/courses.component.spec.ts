import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output} from "@angular/core";

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {By} from "@angular/platform-browser";

import {FilterPipe, OrderByPipe} from "../../pipes";

import {CoursesHandlerService} from "../../services/courses-handler.service";
import {CoursesHandlerServiceMock} from "../../services/courses-handler.service.mock";

import {CoursesComponent} from './courses.component';

import Spy = jasmine.Spy;

@Component({
  selector: 'app-course-item',
  template: '',
})
class FakeCoursesComponent implements Partial<CoursesComponent> {
  @Input()
  public course = COURSE_DATA[0];

  @Output()
  public deleteCourse = new EventEmitter<number>();
}

describe('CoursePageComponent', () => {
  let app: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesHandlerService: CoursesHandlerService;
  let coursesComponent: FakeCoursesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        OrderByPipe,
        FilterPipe,
        FakeCoursesComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: CoursesHandlerService, useClass: CoursesHandlerServiceMock}]
    }).compileComponents();

    coursesHandlerService = TestBed.inject(CoursesHandlerService);
    fixture = TestBed.createComponent(CoursesComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();

    const coursesEl = fixture.debugElement.query(
      By.directive(FakeCoursesComponent)
    );
    coursesComponent = coursesEl.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should assign array without one elem by deleting', () => {
    const id = 1;
    const coursesHandlerSpy: Spy = spyOn(coursesHandlerService, "removeItem");

    spyOn(window, 'confirm').and.callFake(() => true);
    coursesComponent.deleteCourse.emit(id);

    expect(coursesHandlerSpy).toHaveBeenCalled();
  });

  it('should have a properly functioning trackBy func that returns correct id', () => {
    const courseIndex = 3;
    let course = COURSE_DATA[0];

    let trackByResult = app.trackByFn(courseIndex, course);

    expect(trackByResult).toBe(course.id);
  });

  it('should have a correct course-item-page array after rendering a component', () => {
    app.ngOnInit();

    expect(app.visibleCourses).toBeTruthy();
    expect(app.visibleCourses?.length).not.toEqual(0);
  });

  describe('onSearchCourse()', () => {
    it('should assign a correct array to the course-item-page variable if there is valid searchValue string', () => {
      const searchValue = 'Course 1';

      app.onSearchCourse(searchValue);

      expect(app.visibleCourses?.length).toEqual(1);
    });

    it('should assign a full initial array to the course-item-page variable if input is empty', () => {
      const searchValue = '';

      app.onSearchCourse(searchValue);

      expect(app.visibleCourses).toEqual(COURSE_DATA);
      expect(app.visibleCourses?.length).toBe(COURSE_DATA.length);
    });
  });
});
