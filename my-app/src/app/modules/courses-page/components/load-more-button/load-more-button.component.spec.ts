import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadMoreButtonComponent} from './load-more-button.component';

describe('LoadMoreButtonComponent', () => {
  let component: LoadMoreButtonComponent;
  let fixture: ComponentFixture<LoadMoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadMoreButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoadMoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should log message 'Load More Btn was clicked'", () => {
    const consoleSpy = spyOn(console, 'log');
    component.loadMoreButtonClicked();

    expect(consoleSpy).toHaveBeenCalledWith('Load More Btn was clicked');
  });
});
