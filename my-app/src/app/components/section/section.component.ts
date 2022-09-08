import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
  @Output() searchCourse = new EventEmitter<string>();
  public courseName: string = ''

  public searchButtonClicked(searchValue: string): void {
    this.searchCourse.emit(searchValue);
  }
}
