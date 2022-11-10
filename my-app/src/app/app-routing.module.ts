import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginPageComponent} from "./modules/login-page/login-page.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'courses'},
  {
    path: 'courses',
    loadChildren: () =>
      import("./modules/courses-page/courses-page.module")
        .then((m) => m.CoursesPageModule)
  },
  {path: 'login', component: LoginPageComponent, title: 'Login'},
  {path: 'not-found-page', component: PageNotFoundComponent, title: 'Not Found'},
  {path: '**', redirectTo: 'not-found-page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
