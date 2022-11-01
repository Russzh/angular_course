import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {ICourse} from "@shared/";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() course: ICourse | undefined;
  @Output() deleteCourse = new EventEmitter<number>();
  @Output() editCourse = new EventEmitter<ICourse>();

  public deleteButtonClicked(id: number): void {
    this.deleteCourse.emit(id)
  }
}
