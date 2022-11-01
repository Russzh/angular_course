import {NgModule} from '@angular/core';

import {IfAuthenticatedDirective} from '@core/directives/if-authenticated.directive';
import {DurationHandlerPipe} from "@core/pipes/duration-handler/duration-handler.pipe";

@NgModule({
  declarations: [
    IfAuthenticatedDirective,
    DurationHandlerPipe
  ],
  exports: [IfAuthenticatedDirective, DurationHandlerPipe],
})
export class CoreModule {
}
