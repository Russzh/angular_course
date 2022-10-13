import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {IfAuthenticatedDirective} from '@core/directives/if-authenticated.directive';
import {DurationHandlerPipe} from "@core/pipes/duration-handler/duration-handler.pipe";

@NgModule({
  declarations: [
    IfAuthenticatedDirective,
    DurationHandlerPipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [IfAuthenticatedDirective, DurationHandlerPipe],
})
export class CoreModule {
}
