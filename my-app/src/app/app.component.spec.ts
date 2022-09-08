import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";

import {COURSE_DATA} from "../assets/mocks/course-data.mock";

import {OrderByPipe} from "./shared";

import {AppComponent} from './app.component';

import Spy = jasmine.Spy;

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, OrderByPipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should log value of courseId by course deleting', () => {
    const courseID = 3;
    const consoleSpy: Spy = spyOn(console, 'log');

    app.onDeleteCourse(courseID);

    expect(consoleSpy).toHaveBeenCalledWith(courseID);
  });

  it('should have a properly functioning trackBy func that returns correct id', () => {
    const courseIndex = 3;
    let course = COURSE_DATA[0];

    let trackByResult = app.trackByFn(courseIndex, course);

    expect(trackByResult).toBe(course.id);
  });

  it('should have a correct courses array after rendering a component', () => {
    app.ngOnInit();

    expect(app.courses).toBeTruthy();
    expect(app.courses?.length).not.toEqual(0);
  });

  describe('onSearchCourse()', () => {
    it('should assign a correct array to the courses variable if there is valid searchValue string', () => {
      const searchValue = 'Course 1';

      app.onSearchCourse(searchValue);

      expect(app.courses?.length).toEqual(1);
    });

    it('should assign a correct array to the courses variable if input is empty', () => {
      const searchValue = '';

      app.onSearchCourse(searchValue);

      expect(app.courses).toEqual(COURSE_DATA);
    });
  });
});
