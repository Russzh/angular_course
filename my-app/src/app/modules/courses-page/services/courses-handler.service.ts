import {Injectable} from '@angular/core';

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {Course} from "@shared/";

@Injectable({
  providedIn: 'root'
})

export class CoursesHandlerService {
  constructor() {
  }

  public getList(): Course[] {
    return COURSE_DATA;
  }

  // public createCourse(properties: Course, arr: Course[]): Course[] {
  //   arr.push(properties);
  //   return arr;
  // }
  //
  // public getItemById(id: number, arr: Course[]): Course | undefined {
  //   return arr.find(item => item.id === id);
  // }
  //
  // public updateItem() {
  // }

  public removeItem(id: number, arr: Course[]): Course[] {
    return arr.filter(item => item.id !== id);
  }
}
