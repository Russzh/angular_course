import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import clone from 'lodash/clone';
import random from 'lodash/random';

import {Course} from "./shared";

const NUMBER_OF_COURSES: number = 3;
const MAX_RANDOM_VALUE = 100;

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
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  courses: Course[] | undefined;

  ngOnInit(): void {
    this.courses = Array(NUMBER_OF_COURSES).fill(COURSE_DATA).map(item => {
      let copiedItem = clone(item);
      copiedItem.id = random(MAX_RANDOM_VALUE);
      return copiedItem
    });
  }

  public onDeleteCourse(courseId: number): void {
    console.log(courseId);
  }

  public trackByFn(index: number, item: Course): number {
    return item.id;
  }
}
