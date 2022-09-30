import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {ICourse} from "@shared/";

import {FilterPipe} from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return array that contains correct elems regarding searchValue', () => {
    const elOfMockArr: ICourse = COURSE_DATA[2];
    const searchValue: string = elOfMockArr.title.split(' ')[2].toString().substring(0, 3);

    expect(pipe.transform(COURSE_DATA, searchValue)?.length).toEqual(1);
    expect(pipe.transform(COURSE_DATA, searchValue)).toEqual([elOfMockArr]);
  });

  it('should return array that contains correct elems regarding searchValue', () => {
    const searchValue: string = COURSE_DATA[2].title.split(' ')[2];

    expect(pipe.transform(COURSE_DATA, searchValue)?.length).toEqual(1);
  });
});
