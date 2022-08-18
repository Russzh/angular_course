import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../app.component";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() course: Course | undefined;

  ngOnInit(): void {
  }
}
