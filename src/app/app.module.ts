import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
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
import { AboutUsComponent } from './Components/Home/about-us/about-us.component';
import { HeroComponent } from './Components/Home/hero/hero.component';
import { LandingComponent } from './Components/Home/landing/landing.component';
import { RefereeComponent } from './Components/Dashboard/referee/referee.component';
import { FileReportComponent } from './Components/Dashboard/file-report/file-report.component';
import { AddStakeComponent } from './Components/Dashboard/add-stake/add-stake.component';
import { CheerLeaderComponent } from './Components/Dashboard/cheer-leader/cheer-leader.component';
import { ViewComponent } from './Components/Commitment/view/view.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AngularRaveModule } from 'angular-rave';

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
    NoCommitmentComponent,
    AboutUsComponent,
    HeroComponent,
    LandingComponent,
    RefereeComponent,
    FileReportComponent,
    AddStakeComponent,
    CheerLeaderComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularRaveModule.forRoot({
      key: 'FLWPUBK_TEST-029cda30b86a3225a31537fabd498f9f-X',
      isTest: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
