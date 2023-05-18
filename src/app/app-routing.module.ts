import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ApplicantSideComponent } from './applicant-side/applicant-side.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'user', component: ApplicantSideComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
