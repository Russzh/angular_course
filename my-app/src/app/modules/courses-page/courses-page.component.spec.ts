import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {FilterPipe, OrderByPipe} from "./core";

import {CoursesPageComponent} from './courses-page.component';

describe('CoursePageComponent', () => {
  let app: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesPageComponent, OrderByPipe, FilterPipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesPageComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should assign array without one elem by deleting', () => {
    const courseID = 3;

    app.onDeleteCourse(courseID);

    expect(app.currentCourses).toEqual(COURSE_DATA.filter(item => item.id !== courseID));
  });

  it('should have a properly functioning trackBy func that returns correct id', () => {
    const courseIndex = 3;
    let course = COURSE_DATA[0];

    let trackByResult = app.trackByFn(courseIndex, course);

    expect(trackByResult).toBe(course.id);
  });

  it('should have a correct courses-page array after rendering a component', () => {
    app.ngOnInit();

    expect(app.currentCourses).toBeTruthy();
    expect(app.currentCourses?.length).not.toEqual(0);
  });

  describe('onSearchCourse()', () => {
    it('should assign a correct array to the courses-page variable if there is valid searchValue string', () => {
      const searchValue = 'Course 1';

      app.onSearchCourse(searchValue);

      expect(app.currentCourses?.length).toEqual(1);
    });

    it('should assign a full initial array to the courses-page variable if input is empty', () => {
      const searchValue = '';

      app.onSearchCourse(searchValue);

      expect(app.currentCourses).toEqual(COURSE_DATA);
      expect(app.currentCourses?.length).toBe(COURSE_DATA.length);
    });
  });
});
