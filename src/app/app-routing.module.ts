import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOnPageComponent } from './components/sign-on-page/sign-on-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: 'sign-on', component: SignOnPageComponent },
  { path: '', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
