import {Course} from "../../app/shared";

export const COURSE_DATA: Course[] = [{
  id: 1,
  title: 'Video Course 1. Name tag',
  creationDate: new Date('2022-08-30'),
  duration: 120,
  description: 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipisicing elit. Aut corporis eaque fugiat itaque laudantium modi, ' +
    'provident quae quidem tenetur voluptatum.',
  topRated: true
},
  {
    id: 2,
    title: 'Angular Global Mentoring',
    creationDate: new Date('2022-09-25'),
    duration: 88,
    description: 'Lorem ipsum dolor sit amet, ' +
      'consectetur adipisicing elit. Aut corporis eaque fugiat itaque laudantium modi, ' +
      'provident quae quidem tenetur voluptatum.',
    topRated: true
  },
  {
    id: 3,
    title: 'React 5 months duration',
    creationDate: new Date('2022-07-07'),
    duration: 48,
    description: 'Lorem ipsum dolor sit amet, ' +
      'consectetur adipisicing elit. Aut corporis eaque fugiat itaque laudantium modi, ' +
      'provident quae quidem tenetur voluptatum.',
    topRated: false
  }];
