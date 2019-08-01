import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOnPageComponent } from './sign-on-page/sign-on-page.component';


const routes: Routes = [
  { path: 'sign-in', component: SignOnPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
