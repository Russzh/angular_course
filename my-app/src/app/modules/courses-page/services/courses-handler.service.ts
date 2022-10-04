import {Injectable} from '@angular/core';

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {ICourse} from "@shared/";

export interface ICoursesHandlerService {
  getList(): ICourse[];

  getItemById(id: number): ICourse | undefined;

  removeItem(id: number): ICourse[];
}

@Injectable({
  providedIn: 'root'
})

export class CoursesHandlerService implements ICoursesHandlerService {
  private initialCourses: ICourse[] = COURSE_DATA;
  private visibleCourses: ICourse[] = structuredClone(this.initialCourses);

  constructor() {
  }

  public getList(): ICourse[] {
    return this.visibleCourses;
  }

  // public createCourse(properties: Course, arr: Course[]): Course[] {
  //   arr.push(properties);
  //   return arr;
  // }
  //
  public getItemById(id: number): ICourse | undefined {
    return this.visibleCourses.find(item => item.id === id);
  }

  //
  // public updateItem() {
  // }

  public removeItem(id: number): ICourse[] {
    this.visibleCourses = this.visibleCourses.filter(item => item.id !== id);
    return this.visibleCourses
  }
}
