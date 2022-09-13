import { TestBed } from '@angular/core/testing';

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import { CoursesHandlerService } from './courses-handler.service';

describe('CoursesHandlerService', () => {
  let service: CoursesHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove course from array and have a length one less by removeItem()', () => {
    const serviceResult = service.removeItem(1, COURSE_DATA);

    expect(serviceResult.length).toEqual(COURSE_DATA.length - 1);
    expect(serviceResult).not.toEqual(COURSE_DATA);
  });
});
