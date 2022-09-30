import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {ICourse} from "@shared/";

import {OrderByPipe} from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();
  const sortedArrayByCreationDate: ICourse[] = [COURSE_DATA[2], COURSE_DATA[0], COURSE_DATA[1]];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return sorted array by creationDate field', () => {
    expect(pipe.transform(COURSE_DATA, 'creationDate')).toEqual(sortedArrayByCreationDate);
  });

  it('should return input array if the array contains one el', () => {
    const onElArray: ICourse[] = [COURSE_DATA[0]];

    expect(pipe.transform(onElArray, 'creationDate')).toEqual(onElArray);
  });
});
