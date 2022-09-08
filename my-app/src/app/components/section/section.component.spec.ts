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

  it('should log value of courseName by clicking on search button', () => {
    const consoleSpy = spyOn(console, 'log');
    component.searchButtonClicked();

    expect(consoleSpy).toHaveBeenCalledWith(component.courseName);
  });
});
