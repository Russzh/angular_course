import {TestBed} from '@angular/core/testing';

import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {CoursesHandlerService} from './courses-handler.service';

describe('CoursesHandlerService', () => {
  let service: CoursesHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return courses array by getList()', () => {
    const getListResult = service.getList();

    expect(getListResult.length).toEqual(COURSE_DATA.length);
    expect(getListResult).toEqual(COURSE_DATA);
  });

  it('should return proper course by getItemById()', () => {
    const getItemByIdResult = service.getItemById(1);

    expect(getItemByIdResult).toEqual(COURSE_DATA[0]);
  });

  it('should remove course from array and have a length one less by removeItem()', () => {
    const IDToDelete = 1;
    const removeItemResult = service.removeItem(IDToDelete);

    expect(removeItemResult.length).toEqual(COURSE_DATA.length - 1);
    expect(removeItemResult).not.toEqual(COURSE_DATA);
    expect(removeItemResult.find(item => item.id === IDToDelete)).toBeUndefined();
  });
});
