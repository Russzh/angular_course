import {Injectable} from '@angular/core';

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {ICourse} from "@shared/";
import {BehaviorSubject} from "rxjs";

export interface ICoursesHandlerService {
  getList(): BehaviorSubject<ICourse[]>;

  getItemById(id: number): ICourse | undefined;

  removeItem(id: number): void;
}

@Injectable({
  providedIn: 'root'
})

export class CoursesHandlerService implements ICoursesHandlerService {
  private existingCourses$: BehaviorSubject<ICourse[]> = new BehaviorSubject(structuredClone(COURSE_DATA));

  public getList(): BehaviorSubject<ICourse[]> {
    return this.existingCourses$;
  }

  public createCourse(courseData: ICourse): void {
    let copiedCourses: ICourse[] = structuredClone(this.existingCourses$.getValue());

    copiedCourses.push(courseData);

    this.existingCourses$.next(copiedCourses);
  }

  public getItemById(id: number): ICourse | undefined {
    return this.existingCourses$.getValue().find((item: ICourse) => item.id === id);
  }

  public updateItem(courseData: ICourse): void {
    const copiedCourses: ICourse[] = structuredClone(this.existingCourses$.getValue());

    this.existingCourses$.next(copiedCourses.map(item => item.id === courseData.id ? courseData : item));
  }

  public removeItem(id: number): void {
    const updatedCourses: ICourse[] = this.existingCourses$.getValue().filter((item: ICourse) => item.id !== id);

    this.existingCourses$.next(updatedCourses);
  }
}
