import { ComponentFixture, TestBed } from '@angular/core/testing';

import {FormBuilder} from "@angular/forms";
import {NO_ERRORS_SCHEMA} from "@angular/core";

import {DurationHandlerPipe} from "@core/pipes/duration-handler/duration-handler.pipe";

import { AddCoursePageComponent } from './add-course-page.component';

describe('AddCoursePageComponent', () => {
  let component: AddCoursePageComponent;
  let fixture: ComponentFixture<AddCoursePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoursePageComponent, DurationHandlerPipe],
      providers:[FormBuilder],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
