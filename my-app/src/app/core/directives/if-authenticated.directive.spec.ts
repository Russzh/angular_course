import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IfAuthenticatedDirective} from './if-authenticated.directive';

describe('IfAuthenticatedDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  @Component({
    template: `
      <div class="first-block" *appIfAuthenticated=true></div>
      <div class="second-block" *appIfAuthenticated=false></div>`
  })
  class TestComponent {
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        declarations: [IfAuthenticatedDirective, TestComponent]
      })
      .compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create first div el due to true input param of directive', () => {
    expect(fixture.nativeElement.querySelector('.first-block')).toBeTruthy();
  });

  it('shouldn`t create second div el due to false input param of directive', () => {
    expect(fixture.nativeElement.querySelector('.second-block')).toBeFalsy();
  });
});
