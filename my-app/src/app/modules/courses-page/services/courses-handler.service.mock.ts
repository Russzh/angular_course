import {ICourse} from "@shared/*";
import {COURSE_DATA} from "@assets/mocks/course-data.mock";

import {ICoursesHandlerService} from "./courses-handler.service";

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
