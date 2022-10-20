import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  @Input() public subRoute?: string;

  public additionalText: string = '';

  ngOnInit(): void {
    this.addNewText();
  }

  private addNewText(): void {
    if (this.subRoute) {
      this.subRoute?.trim() === 'new'
        ? this.additionalText = '/ New Course'
        : this.additionalText = '/ Edit Course'
    }
  }
}
