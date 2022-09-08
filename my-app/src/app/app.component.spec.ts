import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";

import {AppComponent} from './app.component';

import {Course} from "./shared";

import Spy = jasmine.Spy;

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
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
    let course: Course = {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: new Date(),
      duration: 88,
      description: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Aut corporis eaque fugiat itaque laudantium modi, ' +
        'provident quae quidem tenetur voluptatum.'
    }

    let trackByResult = app.trackByFn(courseIndex, course);

    expect(trackByResult).toBe(course.id);
  });

  it('should have a correct courses array after rendering a component', () => {
    app.ngOnInit();

    expect(app.courses).toBeTruthy();
    expect(app.courses?.length).not.toEqual(0);
  });
});
