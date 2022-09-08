import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from "@angular/forms";

import {SectionComponent} from './section.component';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise a correct searchVal by clicking on search button', () => {
    const searchValue: string = 'Course 1';

    component.searchCourse.subscribe((searchVal:string): void => {
      expect(searchVal).toBe(searchValue);
    })

    component.searchButtonClicked(searchValue);
  });
});
