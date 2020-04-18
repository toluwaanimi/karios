import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { RegisterComponent } from './Components/Authentication/register/register.component';
import { ResetPasswordComponent } from './Components/Authentication/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/Authentication/forgot-password/forgot-password.component';
import { NavBarComponent } from './Components/Home/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/Home/footer/footer.component';
import { DashBoardNavBarComponent } from './Components/Dashboard/dash-board-nav-bar/dash-board-nav-bar.component';
import { DashBoardContentComponent } from './Components/Dashboard/dash-board-content/dash-board-content.component';
import { AddCommitmentComponent } from './Components/Dashboard/add-commitment/add-commitment.component';
import { NoCommitmentComponent } from './Components/Dashboard/no-commitment/no-commitment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    NavBarComponent,
    FooterComponent,
    DashBoardNavBarComponent,
    DashBoardContentComponent,
    AddCommitmentComponent,
    NoCommitmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
