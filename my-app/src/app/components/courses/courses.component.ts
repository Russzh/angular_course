import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Course} from "../../app.component";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  @Input() course: Course | undefined;
  @Output() deleteCourse = new EventEmitter<number>();

  public deleteButtonClicked(value: number) {
    this.deleteCourse.emit(value)
  }

  public durationHandler(duration: number): string {
    const MIN_IN_HOUR: number = 60;
    const divisionOfDuration: number = duration / MIN_IN_HOUR;
    const remainderOfDivision: number = duration % MIN_IN_HOUR;
    let handledDuration: string;

    if (duration >= MIN_IN_HOUR) {
      remainderOfDivision
        ? handledDuration = `${Math.floor(divisionOfDuration)} h ${remainderOfDivision} min`
        : handledDuration = `${divisionOfDuration} h`
    } else {
      handledDuration = `${duration} min`
    }
    return handledDuration
  }
}
