import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  public courseName: string | undefined;

  ngOnInit(): void {
    this.courseName = ''
  }

  public searchButtonClicked(): void {
    console.log(this.courseName);
  }
}
