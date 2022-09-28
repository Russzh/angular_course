import {ICourse} from "@shared/*";
import {COURSE_DATA} from "@assets/mocks/course-data.mock";

interface ICoursesHandlerService {
  getList(): ICourse[];

  getItemById(): ICourse;

  removeItem(): ICourse[];
}

export class CoursesHandlerServiceMock implements ICoursesHandlerService {

  public getList(): ICourse[] {
    return COURSE_DATA;
  }

  public getItemById(): ICourse {
    return COURSE_DATA[0];
  }

  public removeItem(): ICourse[] {
    return COURSE_DATA;
  }
}
