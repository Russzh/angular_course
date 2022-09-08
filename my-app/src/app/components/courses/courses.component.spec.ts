import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Component} from "@angular/core";

import {DurationHandlerPipe} from "../../shared";

import {CoursesComponent} from './courses.component';

let component: CoursesComponent;

const course = {
  id: 1,
  title: 'Video Course 1. Name tag',
  creationDate: new Date(),
  duration: 88,
  description: 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipisicing elit. Aut corporis eaque fugiat itaque laudantium modi, ' +
    'provident quae quidem tenetur voluptatum.'
};

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent]
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
    public course = course;

    public deleteButtonClicked(id: number) {
      console.log(`Course with id ${id} was deleted`)
    }
  }

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({declarations: [CoursesComponent, TestHostComponent, DurationHandlerPipe]})
      .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log correct id param by clicking on delete btn', () => {
    const deleteButtonElement: HTMLElement = fixture.nativeElement.querySelector('.delete-button');

    spyOn(console, 'log');

    deleteButtonElement.click();

    expect(console.log).toHaveBeenCalledWith('Course with id 1 was deleted');
  });
});

describe('CoursesComponent as class testing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    component = new CoursesComponent();
    component.course = course;
    spyOn(console, 'log');
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });

  it('should raise correct param by clicking on Delete btn ', () => {
    const courseId = 3;

    component.deleteCourse = jasmine.createSpyObj('deleteCourse', ['emit']);
    component.deleteButtonClicked(courseId);

    expect(component.deleteCourse.emit).toHaveBeenCalledWith(courseId);
  });
});
