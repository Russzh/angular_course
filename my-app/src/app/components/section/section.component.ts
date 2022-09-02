import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
  public courseName: string = ''

  public searchButtonClicked(): void {
    console.log(this.courseName);
  }
}
