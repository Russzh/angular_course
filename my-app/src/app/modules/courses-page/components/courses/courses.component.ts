import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {ICourse} from "@shared/";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {
  @Input() course: ICourse | undefined;
  @Output() deleteCourse = new EventEmitter<number>();
  @Output() editCourse = new EventEmitter<ICourse>();

  public deleteButtonClicked(id: number): void {
    this.deleteCourse.emit(id)
  }

  public editButtonClicked(course: ICourse): void {
    this.editCourse.emit(course)
  }
}
