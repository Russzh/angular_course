import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginPageComponent} from "./modules/login-page/login-page.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {
    path: 'courses',
    loadChildren: () =>
      import("./modules/courses-page/courses-page.module")
        .then((m) => m.CoursesPageModule)
  },
  {path: 'login', component: LoginPageComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
