import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

import {ICourse} from "@shared/*";

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCourseFormComponent {
  @Input() newCourseGroup: FormGroup | undefined;
  @Output() saveCourse = new EventEmitter<ICourse>();

  saveButtonClicked(courseData: ICourse): void {
    this.saveCourse.emit(courseData);
  }
}
