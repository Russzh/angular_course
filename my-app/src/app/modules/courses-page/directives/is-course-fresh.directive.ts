import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import {isAfter, isWithinInterval, sub} from 'date-fns'

const currentDate: Date = new Date();
const borderSettings: string = '3px solid';

@Directive({
  selector: '[appIsCourseFresh]'
})

export class IsCourseFreshDirective implements OnChanges {
  @Input('appIsCourseFresh') public courseDate: Date | undefined;
  @Input() public intervalOfActuality: string = '';

  constructor(private element: ElementRef) {
  }

  public el: HTMLElement = this.element.nativeElement;

  ngOnChanges(): void {
    if (this.courseDate) {
      this.checkCourseForFreshness(this.courseDate)
    }
  }

  private checkCourseForFreshness(courseDate: Date): void {
    if (isAfter(courseDate, currentDate)) {
      this.el.style.border = `${borderSettings} blue`;
    } else if (this.intervalOfActuality && isWithinInterval(courseDate, {
      start: sub(currentDate, {days: +this.intervalOfActuality}),
      end: currentDate
    })) {
      this.el.style.border = `${borderSettings} green`;
    }
  }
}
