import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  NgOtpInputModule } from 'ng-otp-input';
import{HttpClientModule} from '@angular/common/http';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { PlancardComponent } from './plancard/plancard.component';
import { UserviewplanComponent } from './userviewplan/userviewplan.component';
import { PaybillComponent } from './paybill/paybill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ViewplansComponent,
    SignupComponent,
    LoginComponent,
    UserpageComponent,
    UserheaderComponent,
    AdminheaderComponent,
    AdminpageComponent,
    ViewusersComponent,
    PlancardComponent,
    UserviewplanComponent,
    PaybillComponent,
  ],
  imports: [
    BrowserModule,NgOtpInputModule,HttpClientModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
