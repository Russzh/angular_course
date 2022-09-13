import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from "@angular/forms";

import {AuthService} from "../../shared/services/auth.service";

import {LoginPageComponent} from "./login-page.component";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [LoginPageComponent],
  providers: [AuthService]
})

export class LoginPageModule {
}
