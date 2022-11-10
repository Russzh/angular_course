import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from "@angular/forms";

import {RouterModule} from "@angular/router";

import {LoginPageComponent} from "./login-page.component";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [LoginPageComponent]
})

export class LoginPageModule {
}
