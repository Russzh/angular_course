import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

export interface Course {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}

const NUMBER_OF_COURSES: number = 3;

const COURSE_DATA: Course = {
  id: 1,
  title: 'Video Course 1. Name tag',
  creationDate: new Date(),
  duration: 88,
  description: 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipisicing elit. Aut corporis eaque fugiat itaque laudantium modi, ' +
    'provident quae quidem tenetur voluptatum.'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  courses: Course[] | undefined;

  ngOnInit(): void {
    this.courses = Array(NUMBER_OF_COURSES).fill(COURSE_DATA).map(item => {
      const MAX_RANDOM_VALUE = 100;
      let copiedItem = _.clone(item);
      copiedItem.id = _.random(MAX_RANDOM_VALUE);
      return copiedItem
    });
  }

  public onDeleteCourse(courseId: number): void {
    console.log(courseId);
  }

  public trackByFn(index: number, item: Course) {
    return item.id;
  }
}
