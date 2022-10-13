import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCoursePageComponent {
  public newCourseGroup: FormGroup = this.formBuilder.group({
    courseTitle: ['title'],
    courseDescription: ['description'],
    courseDuration: [60],
    courseDate: ['MM/DD/YYYY'],
    courseAuthors: ['Start typing']
  });

  constructor(public formBuilder: FormBuilder) {
  }
}
