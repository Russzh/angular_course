import {Component, OnInit} from '@angular/core';

export interface Course {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  courses: Course[] | undefined;

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: 'Video Course 1. Name tag',
        creationDate: new Date(),
        duration: 88,
        description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipisicing elit. Aut corporis eaque fugiat itaque laudantium modi, ' +
          'provident quae quidem tenetur voluptatum.'
      },
      {
        id: 1,
        title: 'Video Course 1. Name tag',
        creationDate: new Date(),
        duration: 88,
        description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipisicing elit. Aut corporis eaque fugiat itaque laudantium modi, ' +
          'provident quae quidem tenetur voluptatum.'
      },
      {
        id: 1,
        title: 'Video Course 1. Name tag',
        creationDate: new Date(),
        duration: 88,
        description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipisicing elit. Aut corporis eaque fugiat itaque laudantium modi, ' +
          'provident quae quidem tenetur voluptatum.'
      }
    ];
  }
}
