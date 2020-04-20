import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./Components/Authentication/login/login.component";
import {RegisterComponent} from "./Components/Authentication/register/register.component";
import {ForgotPasswordComponent} from "./Components/Authentication/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./Components/Authentication/reset-password/reset-password.component";
import {DashBoardNavBarComponent} from "./Components/Dashboard/dash-board-nav-bar/dash-board-nav-bar.component";
import {DashBoardContentComponent} from "./Components/Dashboard/dash-board-content/dash-board-content.component";
import {NavBarComponent} from "./Components/Home/nav-bar/nav-bar.component";
import {LandingComponent} from './Components/Home/landing/landing.component';
import {AddCommitmentComponent} from "./Components/Dashboard/add-commitment/add-commitment.component";
import {RefereeComponent} from "./Components/Dashboard/referee/referee.component";
import {FileReportComponent} from "./Components/Dashboard/file-report/file-report.component";
import {AddStakeComponent} from "./Components/Dashboard/add-stake/add-stake.component";
import {CheerLeaderComponent} from "./Components/Dashboard/cheer-leader/cheer-leader.component";
import {ViewComponent} from "./Components/Commitment/view/view.component";


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'reset', component: ResetPasswordComponent},
  {
    path: 'dashboard', component: DashBoardNavBarComponent, children: [
      {path: '', component: DashBoardContentComponent, pathMatch: 'full'},
      {
        path: 'add', component: AddCommitmentComponent
      },
      {path: 'cheer', component: CheerLeaderComponent},
      {path: 'view', component: ViewComponent},
      {path: 'stake', component: AddStakeComponent},
      {path: 'referee', component: RefereeComponent},
      {path: 'filereport', component: FileReportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
