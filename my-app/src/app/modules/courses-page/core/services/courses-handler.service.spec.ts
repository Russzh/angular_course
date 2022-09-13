import { TestBed } from '@angular/core/testing';

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
});
