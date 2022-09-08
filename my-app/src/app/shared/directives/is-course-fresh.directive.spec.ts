import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import add from "date-fns/add";
import sub from "date-fns/sub"

import {COURSE_DATA} from "../../../assets/mocks/course-data.mock";

import {IsCourseFreshDirective} from './is-course-fresh.directive';

describe('IsCourseFreshDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  const BORDER_SETS = '3px solid'

  @Component({
    template: `
      <div class="green-border" [appIsCourseFresh]=recentCreationDate></div>
      <div class="blue-border" [appIsCourseFresh]="upcomingCreationDate"></div>
      <div class="none-border-sets" [appIsCourseFresh]="outdatedCreationDate"></div>`
  })
  class TestComponent {
    recentCreationDate = sub(new Date(), {days: 5});
    upcomingCreationDate = add(new Date(), {days: 5});
    outdatedCreationDate = COURSE_DATA[2].creationDate;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        declarations: [IsCourseFreshDirective, TestComponent]
      })
      .compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should set green border ' +
    'if creation date is earlier than current date and not older than 14 days before', () => {
    const freshEl = fixture.nativeElement.querySelector('.green-border');

    expect(freshEl.style.border).toEqual(`${BORDER_SETS} green`);
  });

  it('should set blue border if course is upcoming', () => {
    const upcomingEl = fixture.nativeElement.querySelector('.blue-border');

    expect(upcomingEl.style.border).toEqual(`${BORDER_SETS} blue`);
  });

  it('should not add border sets if creation date is earlier than 14 days of current date', () => {
    const elWithoutBorderSets = fixture.nativeElement.querySelector('.none-border-sets');

    expect(elWithoutBorderSets.style.border).toEqual('');
  });
});
