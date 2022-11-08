import {Injectable} from '@angular/core';

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {ICourse} from "@shared/";
import {BehaviorSubject, Observable} from "rxjs";

export interface ICoursesHandlerService {
  getList(): Observable<ICourse[]>;

  getItemById(id: number): ICourse | undefined;

  removeItem(id: number): void;
}

@Injectable({
  providedIn: 'root'
})

export class CoursesHandlerService implements ICoursesHandlerService {
  private existingCourses$$: BehaviorSubject<ICourse[]> = new BehaviorSubject(structuredClone(COURSE_DATA));
  private existingCourses: ICourse[] = structuredClone(this.existingCourses$$.getValue());

  public getList(): Observable<ICourse[]> {
    return this.existingCourses$$.asObservable();
  }

  public createCourse(courseData: ICourse): void {
    this.existingCourses.push(courseData);

    this.existingCourses$$.next(this.existingCourses);
  }

  public getItemById(id: number): ICourse | undefined {
    return this.existingCourses.find((item: ICourse) => item.id === id);
  }

  public updateItem(courseData: ICourse): void {
    this.existingCourses = this.existingCourses.map(item => item.id === courseData.id ? courseData : item)

    this.existingCourses$$.next(this.existingCourses);
  }

  public removeItem(id: number): void {
    this.existingCourses = this.existingCourses.filter((item: ICourse) => item.id !== id);

    this.existingCourses$$.next(this.existingCourses);
  }
}
