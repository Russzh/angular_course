import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {Course} from "../../shared";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {
  @Input() course: Course | undefined;
  @Output() deleteCourse = new EventEmitter<number>();

  public deleteButtonClicked(value: number): void {
    this.deleteCourse.emit(value)
  }
}
