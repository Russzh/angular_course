import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Component, EventEmitter, NO_ERRORS_SCHEMA, Output} from "@angular/core";

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {DurationHandlerPipe} from "@core/pipes/duration-handler/duration-handler.pipe";

import {CoursesComponent} from './courses.component';

import Spy = jasmine.Spy;

let component: CoursesComponent;

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise correct param by clicking on Delete btn', () => {
    const courseId = 3;

    component.deleteCourse.subscribe((id) => {
      expect(id).toBe(courseId);
    });

    component.deleteButtonClicked(courseId);
  });
});

describe('Test CoursesComponent using test host', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  // Create test host component for courses-item element
  @Component({
    template: `
      <app-courses
        [course]="course"
        (deleteCourse)="deleteButtonClicked($event)">
      </app-courses>`,
  })
  class TestHostComponent {
    @Output() deleteCourse = new EventEmitter<number>();

    public course = COURSE_DATA[0];

    public deleteButtonClicked(id: number) {
      this.deleteCourse.emit(id)
    }
  }

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({declarations:
          [CoursesComponent, TestHostComponent, DurationHandlerPipe], schemas: [NO_ERRORS_SCHEMA]})
      .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log correct id param by clicking on delete btn', () => {
    const deleteButtonElement: HTMLElement = fixture.nativeElement.querySelector('.delete-button');
    const emitSpy: Spy = spyOn(testHostComponent.deleteCourse, 'emit');

    deleteButtonElement.click();

    expect(emitSpy).toHaveBeenCalledWith(COURSE_DATA[0].id);
  });
});

describe('CoursesComponent as class testing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    component = new CoursesComponent();
    component.course = COURSE_DATA[0];
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });

  it('should raise correct param by clicking on Delete btn ', () => {
    const courseId = COURSE_DATA[0].id;

    component.deleteCourse = jasmine.createSpyObj('deleteCourse', ['emit']);
    component.deleteButtonClicked(courseId);

    expect(component.deleteCourse.emit).toHaveBeenCalledWith(courseId);
  });
});
