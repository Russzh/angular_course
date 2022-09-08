import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {isAfter, isWithinInterval, sub} from 'date-fns'

@Directive({
  selector: '[appIsCourseFresh]'
})
export class IsCourseFreshDirective implements OnInit {
  @Input('appIsCourseFresh') public courseDate!: Date;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.checkCourseForFreshness(this.courseDate);
  }

  private checkCourseForFreshness(courseDate: Date): void {
    const currentDate: Date = new Date();
    const daysInTwoWeeks: number = 14;
    const borderSettings: string = '3px solid';
    const el: HTMLElement = this.element.nativeElement;

    if (isAfter(courseDate, currentDate)) {
      el.style.border = `${borderSettings} blue`;
    } else if (isWithinInterval(courseDate, {
      start: sub(currentDate, {days: daysInTwoWeeks}), end: currentDate
    })) {
      el.style.border = `${borderSettings} green`;
    }
  }
}
