import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {IfAuthenticatedDirective} from '@core/directives/if-authenticated.directive';
import {DurationHandlerPipe} from "@core/pipes/duration-handler/duration-handler.pipe";

import {BreadcrumbsComponent} from "../components";

@NgModule({
  declarations: [
    IfAuthenticatedDirective,
    DurationHandlerPipe,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [IfAuthenticatedDirective, DurationHandlerPipe, BreadcrumbsComponent],
})
export class CoreModule {
}
