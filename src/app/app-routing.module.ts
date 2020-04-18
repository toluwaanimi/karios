import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./Components/Authentication/login/login.component";
import {RegisterComponent} from "./Components/Authentication/register/register.component";
import {ForgotPasswordComponent} from "./Components/Authentication/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./Components/Authentication/reset-password/reset-password.component";
import {DashBoardNavBarComponent} from "./Components/Dashboard/dash-board-nav-bar/dash-board-nav-bar.component";
import {DashBoardContentComponent} from "./Components/Dashboard/dash-board-content/dash-board-content.component";


const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'dashboard', component: DashBoardNavBarComponent,pathMatch : 'full', children :[
      {path: '', component: DashBoardContentComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
